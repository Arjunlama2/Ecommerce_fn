import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header1 from '../components/Header1';
import HOC from '../components/HOC';
import CartItem from '../components/CartItem';
function Home() {
  const [cartItems,setCartItes]=useState(0)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
    <div className='mt-5'>
  <CartItem setCartItes={setCartItes} cartItems={cartItems} />
    </div>
    </>
  );
}


export default Home