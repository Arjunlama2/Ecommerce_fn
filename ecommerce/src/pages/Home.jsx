import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header1 from '../components/Header1';
import HOC from '../components/HOC';
import CartItem from '../components/CartItem';
import axios from 'axios';
import { URL } from '../../constant';

function Home() {
  const [cartItems,setCartItes]=useState(0)
  const [products,setProducts]=useState([])
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };

  useEffect(()=>{
 const fetchdata=async()=>{
const response=await axios.get(`${URL}/api/products`)
console.log("thsu is response",response.data)
setProducts(response?.data?.data)
 }

 fetchdata()
  },[])
  return (
    <>
    <Slider  {...settings}>
      <div >
        <img src='/image/1.webp' className='object-cover h-[600px] w-[1470px]'></img>
      </div>
      <div>
      <img src='/image/2.webp' className='object-cover h-[600px] w-[1470px]'></img>
      </div>
      <div>
      <img src='/image/3.webp' className='object-cover h-[600px] w-[1470px]'></img>
      </div>
      <div>
      <img src='/image/4.webp' className='object-cover h-[600px] w-[1470px]'></img>
      </div>
      <div>
      <img src='/image/5.webp' className='object-cover h-[600px] w-[1470px]'></img>
      </div>
     
    </Slider>
    <div className='mt-5 flex  flex-wrap gap-5 mx-auto'>
      {
      products.map((el,index)=>{
          return <div key={index} className=''>
             <CartItem data={el} />
             </div>
        })
      }

    </div>
    </>
  );
}


export default Home