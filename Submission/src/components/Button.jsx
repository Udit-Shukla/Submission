import React from 'react'
import toast from 'react-hot-toast'


const Button = ({text}) => {

  const clickHandler = () => {
    console.log('Issue was resolved successfully!')
    toast.success('Issue was resolved successfully!')
  }

  return (
    <button onClick={clickHandler}
   className='bg-[#1A3875] text-white px-3 py-[10px] rounded-md hover:scale-90'>{text}</button>
  )
}

export default Button