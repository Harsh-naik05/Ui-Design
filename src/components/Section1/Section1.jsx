import 'react'
import Navbar from './Navbar'
import Center from'./Center'

const Section1 = (props) => {

  return (
    <div className='h-screen w-full text-white'>
    <Navbar />
    <Center User={props.User} />
  

    </div>
  )
}

export default Section1