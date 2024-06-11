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
    <div className='h-full w-[70%] pl-4 pt-6 bg-[#F7FAFF] flex flex-col gap-4' >
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
      <div className=' grid-cols-1 md:grid md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 mx-auto '>
        <Cards legend1="Upcoming" legend2="Ongoing" legend3="Complete" value1="50" value2="100" value3="50" title="Orders" />

        <Cards legend1="Upcoming" legend2="Ongoing" legend3="Complete" value1="50" value2="100" value3="50" title="Trips" />

        <Cards legend1="Upcoming" legend2="Ongoing" legend3="Complete" value1="50" value2="100" value3="50" title="Revenue" />

        <Cards legend1="Upcoming" legend2="Ongoing" legend3="Complete" value1="50" value2="100" value3="50" title="Expenses" />

      </div>

      <div>
        <div className='font-second text-base font-semibold leading-[18.75px] pb-4 mt-8'>Quick Actions</div>
        <Actions />
      </div>

      <div className='flex flex-row justify-between mr-6 items-center flex-wrap'>


        <div className='font-second text-base font-semibold leading-[18.75px] mt-8'>High Priority alerts (14)</div>
        <div className='text-[#1A3875] flex flex-row gap-2 hover:cursor-pointer hover:underline underline items-center '>
          <p className='font-second font-normal text-xs leading-[14.06px]'>View All</p>
          <img className='w-[0.65rem] h-[0.5rem]' src={arrow} alt='arrow'></img>
        </div>
      </div>
      <div className='flex flex-col gap-4 justify-between lg:flex-row pb-6'>
        <Alerts
          title='Driver Raised Concern'
          subTitle='Load No: 12454,  Bill To: RoaDo demo Bangalore'
          date='13 Feb 24'
          description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          image={user}

        />
        <Alerts
          title="Reefer temp. out of range"
          subTitle='Load No: 12454,  Bill To: RoaDo demo Bangalore'
          date='13 Feb 24'
          description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          image={device}
        />
      </div>
    </div>
  )
}

export default MainArea 