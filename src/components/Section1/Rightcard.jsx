import 'react'

import Rightcardcontent from './Rightcardcontent';

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl shrink-0 hover:scale-105 transition-all duration-300 cursor-pointer'>

        <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt=""  />
        
        <Rightcardcontent  id ={props.id} tag={props.tag}/>        
       
    </div>  
  )
}

export default Rightcard