import  'react'
import Rightcard from'./Rightcard'
const RightImage = (props) => {

  console.log(props.User)

  return (
    <div id="right" className=' h-full w-2/3 p-6 overflow-x-auto flex gap-10'>  
        {props.User.map(function(elem,idx){
          
          return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} />
          
        })}
        
        

    </div>
  )
}

export default RightImage