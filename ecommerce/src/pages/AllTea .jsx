import React from 'react'

function AllTea () {
  return (
    <div className='flex flex-row justify-center'>
    <div className='w-[800px] h-[350px] flex flex-row gap-[50px] justify-around  bg-blue-100 rounded-b-[15px]'>
      <div className='flex flex-col gap-[20px]'> 
        <label>Black Tea</label>
        <ul >
          <li> RT Black Tea</li>
          <li>Chai Tea</li>
          <li>Herbal Magic</li>
          <li>Tea Blend</li>
          <li>Infuse Tea</li>
          
        </ul>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <label>Green Tea</label>
        <ul>
          <li>Classic Black Tea</li>
          <li>Green Tea</li>
          <li>Cup B0utique</li>
          <li>Hot kettle</li>
          <li>Tea Pot</li>
        </ul>
        
        
        
         </div>
      <div className='flex flex-col gap-[20px]'> 
        <label className='text-[25px] text-black'>Oolong Tea</label> 
        <ul>
          <li>RT Oolong Tea</li>
          <li>Premium Tea</li>
          <li>TeaMan</li>
          <li>Mr.Tea</li>
          <li>Tea Guru</li>

        </ul>

      </div>
      <div>four </div>
      
      
      
      
      
      
       </div>
       </div>
  )
}

export default AllTea 