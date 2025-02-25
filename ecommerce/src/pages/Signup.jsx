import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        address: ''
    });

    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });


    };

    const handlesubmit = async () => {

        console.log("This is the data", formData)
        let body = formData
        try {
            const response = await axios.post("https://ecommerce-backend-2ltu.onrender.com/api/auth/signup", body)
            toast.success("Singup succes")
            navigate("/login")

        } catch (err) { 
            console.log("this is error", err)
            let message = err.response.data.errors[0].msg
            toast.error(`${message}`)
        }



    }


    return (
        <div className='flex  justify-center items-center h-[100vh] '>
            <div className='flex flex-col gap-[50px] border-[2px] bg-slate-700 h-[70vh]  rounded-[20px] items-center  p-5'>
                <div className='flex flex-col gap-[20px] text-[20px] text-white'>
                    <div className='flex gap-5 justify-center'>
                        <div className='flex flex-col'>
                            <label>Name</label>
                            <input type='text' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px] ' name="name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label>Password</label>
                            <input type='password' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px]' name="password"
                                onChange={handleChange}
                            />

                        </div>

                    </div>
                    <div className='flex gap-5 justify-center'>
                        <div className='flex flex-col'>
                            <label>Phone</label>
                            <input type='text' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px] ' name="phone"
                                onChange={handleChange} />
                        </div>
                        <div className='flex flex-col'>
                            <label>Email</label>
                            <input type='email' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px]' name="email"
                                onChange={handleChange} />

                        </div>

                    </div>
                    <div className='flex gap-5 justify-center'>
                        <div className='flex flex-col'>
                            <label>Address</label>
                            <input type='text' className=' border-[2px] border-white  hover:border-blue-700 rounded-[8px]  ' name="address"
                                onChange={handleChange} />
                        </div>
                        <div className='flex flex-col'>
                            <label>ROle</label>
                            <select className='bg-blue-600 text-white' name="role" onChange={handleChange}>
                                <option value="">Choose Role</option>
                                <option value="seller">Seller</option>
                                <option value="seller">Buyer</option>
                            </select>

                        </div>

                    </div>
                </div>
                <div>
                    <button className='bg-blue-700 rounded-[8px] p-[5px] px-[17px]' onClick={() => handlesubmit()}>Sign Up</button>

                </div>
                <div className='text-white flex gap-2'>
                    <p>I already have an account</p>
                    <Link to={"/login"} className='text-blue-600'>Login</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    )

}
export default Signup