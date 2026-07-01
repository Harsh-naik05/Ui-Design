import 'react'
import { ArrowUpRight } from 'lucide-react';

function Lefttext() {
  return (

    <div className=' h-full w-1/3  flex flex-col justify-between text-black'>
        <div className='p-6'>
            <h3 className='text-6xl font-bold mb-7 leading-[1.1] '>Prospective
            <br />
            
            <span className=' rounded-full'>customer</span>
            
            <br />Segmentation</h3>

            <p className='text-xl w-[90%] font-medium text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illum nesciunt neque dolore saepe praesentium! Temporibus deleniti saepe ullam minus.</p>
        </div>
        <div>
            <ArrowUpRight  size={89}/>
        </div>
    </div>
  )
}

export default Lefttext