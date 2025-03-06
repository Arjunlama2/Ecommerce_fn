import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function Details() {
const {id}=useParams()
console.log('this is id',id)

useEffect(()=>{

})
  return (
    <div className=' flex flex-col gap-5 mx-3 md:flex-row  md:gap-5 md:mx-8 lg:gap-8 lg:mx-16 '>

           <img src="/image/1.webp" alt="product" className=" md:h-[64vh] md:aspect-square"/>
   
        <div>
<div className='flex flex-col'>
  <p>Name:{"Green Teal"}</p>
  <p>Price:{"7820"}</p>
  <p>Instock:{"7820"}</p>
 <p>Make it better</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, nesciunt culpa ex consequuntur fugiat explicabo, quaerat cum placeat temporibus adipisci dicta iure fuga itaque natus pariatur voluptatem? Sed, unde et.</p>
</div>

           
        </div>
        
    </div>
  )
}

export default Details