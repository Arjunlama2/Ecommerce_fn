import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function Details() {
const {id}=useParams()
console.log('this is id',id)

useEffect(()=>{
//fetch the 
})
  return (
    <div className=' mx-24 flex gap-8'>

        <div>
           <img src="/image/1.webp" alt="product" className='h-[60vh] aspect-square' />
        </div>
        <div>


            make this ui better 
            details 
        </div>
        
    </div>
  )
}

export default Details