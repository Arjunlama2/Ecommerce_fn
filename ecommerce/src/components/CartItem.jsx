import React from 'react'

function CartItem(props) {
  return (
    <div>


        <button className='bg-red-400'
        
        onClick={()=>props.setCartItes(props.cartItems + 1)}>
            add to cart
        </button>
    </div>
  )
}   

export default CartItem