import React from 'react'

function CartItem({ data }) {
  return (
    <div className='flex flex-col gap-2 items-center'>

      <div className='h-[200px] w-[300px]  bg-transparent bg-cover bg-no-repeat ' style={{ backgroundImage: `url('${data.image}')` }}>


      </div>

      <div className='flex flex-col items-center gap-1'>
        <p className='font-bold'>{data.title}</p>

        <p>${data.price}</p>

        <button className='bg-green-500 p-1 px-4 rounded-lg'>Add to Cart</button>

      </div>

    </div>
  )
}

export default CartItem