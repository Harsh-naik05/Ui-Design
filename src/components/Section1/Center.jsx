import'react'
import Lefttext from './Lefttext'
import Rightimage from './Rightimage'

const Center = (props) => {

  

  return (
    <div className='pb-16 pt-6  px-18 h-[90vh] flex gap-10 justify-between items-center '>
        <Lefttext />
        <Rightimage User={props.User}  />
    </div>
  )
}

export default Center
