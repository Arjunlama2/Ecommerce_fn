import React from 'react'
import { URL } from '../../constant'
import { Link } from 'react-router'

function CartItem({ data }) {
  console.log("this is datta",data)
  return (
    <Link to={`/details/${data._id}`}>
    <div className='flex flex-col gap-2 items-center'>

      <div className='h-[200px] w-[300px]  bg-transparent bg-cover bg-no-repeat ' style={{ backgroundImage: `url('${URL}${data.image}')` }}>


      </div>

      <div className='flex flex-col items-center gap-1'>
        <p className='font-bold'>{data.title}</p>

        <p>${data.price}</p>

        <button className='bg-green-500 p-1 px-4 rounded-lg'>Add to Cart</button>

      </div>

    </div>
    </Link>
  )
}

export default CartItem