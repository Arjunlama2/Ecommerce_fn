import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header1 from '../components/Header1';
import HOC from '../components/HOC';
import CartItem from '../components/CartItem';
import axios from 'axios';
import { URL } from '../../constant';
import useFetch from '../useFetch';

function Home() {
  const [cartItems,setCartItes]=useState(0)

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };
const {data}=useFetch("products")

const products=data?data.data:[]
  const featuredProducts=products?.filter((el,index)=>{
return index<=6
  })


  return (
    <>
    <Slider  {...settings} className='mt-14
     md:mt-0'>
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
      featuredProducts?.map((el,index)=>{
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