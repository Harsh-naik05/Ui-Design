import 'react'
import { ArrowRight } from 'lucide-react';

const Rightcardcontent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='rounded-full bg-white items-center text-black h-12 w-12 font-semibold  flex justify-center'>{props.id+1}</h2>
            <div>
                <p className=' text-xl leading-relaxed mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eveniet quam est voluptas aliquid? Atque.</p>
                <div className='flex justify-between '>
                    <button className='bg-blue-500 rounded-full px-8 py-2 text-lg font-medium'>{props.tag}</button>
                    <button className='bg-blue-500 rounded-full px-3 py-2 text-lg font-medium'> <ArrowRight /> </button>
                </div>
            </div>          
        </div>
  )
}

export default Rightcardcontent