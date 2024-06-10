import Divider from '@mui/material/Divider';
import arrow from '../assets/icons/arrow.svg';
import device from '../assets/icons/device.svg';
import dots from '../assets/icons/dots.svg';
import notify from '../assets/icons/notify.svg';
import search from '../assets/icons/search.svg';
import user from '../assets/icons/user.svg';
import Actions from './Actions';
import Alerts from './Alerts';
import Cards from './Cards';
const MainArea = () => {
  return (
    <div className='h-full w-[80%] pl-4 pt-6 bg-[#F7FAFF] flex flex-col gap-4' >
      <div className='flex flex-row items-center justify-between'>
        <div> <p className=' font-custom font-medium  text-2xl'>Dashboard</p> </div>
        <div className='flex flex-row gap-5 rounded-full bg-white shadow-sm p-2 px-3 pr-4  mx-6'>
      <img src={search} alt='user' className="hover:scale-150 hover:cursor-pointer" ></img>
      <Divider orientation="vertical" variant="full" flexItem />
      <img src={notify} alt='notify' className="hover:scale-150 hover:cursor-pointer"></img>
      <Divider orientation="vertical" variant="full" flexItem />
      <img src={dots} alt='dots ' className="hover:scale-150 hover:cursor-pointer"></img>
        </div>
      </div>

      {/* Cards  */}
      <div>
        <Cards/>
      </div>

      <div>
      <div className='font-second text-base font-medium leading-[18.75px] pb-4'>Quick Actions</div>
        <Actions/>
      </div>

      <div className='flex flex-row justify-between mr-6'>
      
        
        <div className='font-second text-base font-medium leading-[18.75px]'>High Priority alerts (14)</div>
        <div className='text-[#1A3875] flex flex-row gap-2 hover:cursor-pointer hover:underline'>
          <p>View All</p>
          <img src ={arrow} alt='arrow'></img>
        </div>
      </div>
     <div className='flex flex-row justify-between'>
     <Alerts 
      title='Driver Raised Concern'
      subTitle='Load No: 12454,  Bill To: RoaDo demo Bangalore'
      date = '13 Feb 24'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
      image={user}

     />
     <Alerts 
      title ="Reefer temp. out of range"
      subTitle='Load No: 12454,  Bill To: RoaDo demo Bangalore'
      date = '13 Feb 24'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
      image={device}
     />
     </div>
    </div>
  )
}

export default MainArea 