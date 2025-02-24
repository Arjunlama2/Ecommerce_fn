import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast,ToastContainer } from 'react-toastify';

function login() {
  
  const [loginData, setFormData] = useState({
    email: '',
    password: '',
  
});

const navigate = useNavigate()
const handleChange = (e) => {
    setFormData({ ...loginData, [e.target.name]: e.target.value });


};
const handlesubmit=async()=>{
  let body=loginData
  try{
    const res=await axios.post("https://ecommerce-backend-2ltu.onrender.com/api/auth/login", body)
    console.log("This is respose",res)
    let token=res.data.token
    localStorage.setItem("token",token)
    toast.success("Login Success")
    navigate('/')
  }catch(err){
    toast.error()
  }

}
    
useEffect(()=>{
  let token=localStorage.getItem("token")
  if(token){
    navigate("/")
  }
},[])

  
  return (
    <div className='flex flex-row justify-center items-center h-[100vh] bg'>
        <div className='flex flex-col gap-[50px] border-[2px] bg-slate-700 h-[70vh] w-[350px] rounded-[20px] items-center justify-center'>
            <div className='flex flex-col gap-[20px] text-[20px] text-white'>
                <label>Email</label>
                <input type='email' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px] ' 
                name="email"
                onChange={handleChange}/>
                <label>Password</label>
                <input type='password' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px]'
                name='password'
                onChange={handleChange}/>


            </div>
            <div>
              <button className='bg-blue-700 rounded-[8px] p-[5px] px-[17px]' onClick={()=>handlesubmit()}>Login</button>

            </div>
            <div className='text-white flex gap-2'>
              <p>I Don't Have an account</p>
              <Link to={"/signup"} className='text-blue-600'>Signup</Link>
            </div>
            <ToastContainer/>
        </div>
    </div>
  )

}
export default login