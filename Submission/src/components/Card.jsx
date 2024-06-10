import React from 'react'

const Card = ({color,value,payments,type}) => {
  return (
    <div className={`flex flex-col  border w-[45%] p-2 `}>
 <p className='font-second font-medium text-xs text-[#676666]'>{type}</p>
 <p className={`${color} pt-4 font-medium text-base`}>{value}</p>
<p className='font-second font-normal text-xs text-[#676666]'>{payments} payments recieved</p>
    </div>
  )
}



export default Card