import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

import { BsCartCheck } from "react-icons/bs";
import axios from 'axios';



function Header1(props) {
  const [user, setUser] = useState()



 
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const fetchData = async () => {
        console.log("fetching data")
        try {
          const response = await axios.get(
            'https://ecommerce-backend-2ltu.onrender.com/api/auth/me',
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );
          console.log(response)
          setUser(response.data)
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle error, e.g., clear token if it's invalid
          localStorage.removeItem('token');
          setUser(null);
        }
      };

     fetchData()
    } else {
      setUser(null);

    }



  }, []);

  return (
    <div className='flex flex-row justify-center gap-[100px] bg-gray-100 h-[80px] items-center'>

      <p className='hover:text-green-500 transition all duration-800 cursor-pointer' ><Link to="/">Home</Link></p>
      <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/alltea">All Tea</Link></p>
      <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/discover">Discover</Link></p>
      <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/news">News</Link></p>
      <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/pages">Pages</Link></p>

      <p className='relative'>
        <Link to={"/cart"}>
          <BsCartCheck /><span className='flex bg-red-600 rounded-full h-4 aspect-square items-center justify-center text-white absolute -top-2 -right-2'>{props?.cartItems}</span>
        </Link>
      </p>

      <div className='flex felx-row  pl-[80px]'>
        {
          user ?
            <div className='bg-[#20d7b8ee] h-8 text-center rounded-full aspect-square'>{
              <p  className='uppercase'>{user?.name?.split("")[0]}</p>
              
            }
            </div> :
            <button 
            className='bg-blue-400 p-[5px] px-[17px]
             rounded-[20px] text-white'><Link to="/login">
              Login</Link></button>
        }

      </div>





    </div>
  )
}

export default Header1