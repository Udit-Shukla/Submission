import toast from "react-hot-toast"
import Button from "./Button"

const Alerts = ({
  title,
  subTitle,
  date,
  description,
  image
}) => {

  const clickHandler = () => {
    
    toast.error('Issue was ignored! ')
  }

  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white pb-6 pt-4 hover:shadow-2xl hover:cursor-pointer" >
       

        <div className="flex flex-col mb-8 mx-1">

            <div className="flex flex-col gap-4 relative py-4">
            <div className="flex flex-row justify-between px-4">
            <div className='flex flex-row gap-4'> 
            <div className='bg-[#E0EAFF] w-[32px] h-[32px] rounded-md  mx-auto'>
                <img src={image} alt="user" className=' px-2 py-2 ' />
            </div>
                <div className="flex flex-col gap-1">
                    <p className="font-second font-medium text-sm leading-[16.41px]">{title}</p>
                    <p className="font-second font-normal text-[10px] leading-[11.72px]">{subTitle}</p>
                </div>
            </div>
                <div className=" font-second font-normal text-xs"> {date}</div>
</div>
                <p className="ml-5 font-second font-normal text-xs"> {description}</p>
            
                <div className="flex flex-row items-center gap-8 absolute bottom-[-40px] right-8">
            <button onClick={clickHandler} className="text-[#1A3875] flex flex-row gap-2 hover:cursor-pointer underline font-second font-normal text-xs leading-[14.06px]">
          Ignore
        </button> 
        <Button text="Resolve"></Button>
            </div>
           
            </div>
           
           
        </div>
    </div>
    
  )
}

export default Alerts