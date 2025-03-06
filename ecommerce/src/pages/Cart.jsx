import React, { useEffect, useState } from 'react'
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Card = ({ data }) => {
  const [quantity, setquantity] = useState(1)
  return <div className='flex felx-row  mt-[30px] '>
    <img src='/image/2.webp' className='h-[250px] aspect-square ml-[100px] ' />
    <div className='flex flex-col gap-[15px] border-[1px] border-gray-400 w-[500px] pl-[30px]'>
      <p className='text-black text-[40px]'>{data?.product_id?.title}</p>
      <p>250 <small>gm</small> / Spearmint / Deep Red</p>
      <p className='text-[20px] font-bold'>Rs.{data?.product_id?.price * quantity}</p>
      <div className='flex gap-5'>

        <TiMinus
          onClick={() => setquantity(quantity - 1)}
        />
        {
          quantity
        }
        <FaPlus onClick={() => setquantity(quantity + 1)} />
      </div>
      <button className='border-[1px] border-black h-[30px] w-[100px]  bg-green-500 rounded-[8px]  border-hidden' >Order now</button>
    </div>
  </div>
}

function Cart() {
  const [cartItems, setcartItems] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const fetchDataforcart = async () => {
        try {
          const response = await axios.get(
            'https://ecommerce-backend-2ltu.onrender.com/api/cart',
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          )


          setcartItems(response.data)
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle error, e.g., clear token if it's invalid

        }
      };

      fetchDataforcart()
    }


  }, []);

  return (
    <div className='flex flex-row'>
      <div className='flex flex-row gap-[10px] md:flex-col'>


        {
          cartItems.length>1 ?
            cartItems.map((el) => {
              return <Card key={el._id} data={el} />
            }) :

            <div className='w-[500px] pl-[30px]'>

              <Skeleton count={5} />
            </div>
        }


      </div>
      <div className='flex flex-col gap-[20px] m-[50px]'>
        <p className='text-[40px]'>Order Summary</p>
        <p className='text-green-400 text-[30px]'>Subtotal : Rs. 2,170.00</p>
        <button className='p-[5px] h-[35px] w-[300px] border-[1px] border-green-500 rounded-[8px] bg-green-500 flex flex-row justify-center '>Continue </button>
      </div>

    </div>
  )
}

export default Cart

