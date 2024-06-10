import Group from '../assets/icons/Group.svg'
import Vector from '../assets/icons/Vector.svg'
import assignment from '../assets/icons/assignment.svg'
import business from '../assets/icons/business.svg'
import dashboard from '../assets/icons/dashboard.svg'
import feed from '../assets/icons/feed.svg'
import label from '../assets/icons/label.svg'
import queue from '../assets/icons/queue.svg'
import setting from '../assets/icons/setting.svg'
import shipping from '../assets/icons/shipping.svg'
import trackign from '../assets/icons/trackign.svg'
import wallet from '../assets/icons/wallet.svg'
const NavigationTab = () => {
  return (
    <div className=' w-[5%] h-full flex flex-col items-center gap-2 pt-4 shadow-sm bg-white'>
    {/* Logo  */}
    <div className="p-2 cursor-pointer hover:rounded-full hover:bg-gray-200">
      <img src={Group} alt="logo"/>
      </div>

    {/* Navigation Tab */}
    <div className='flex flex-col mt-2 '>
    <img src={dashboard} alt="dashboard" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={queue} alt="queue" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={label} alt="label" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={assignment} alt="assignment" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={Vector} alt="Vector" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={shipping} alt="shipping" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={trackign} alt="trackign" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={business} alt="business" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={wallet} alt="wallet" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={feed} alt="feed" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>
    <img src={setting} alt="setting" className='cursor-pointer hover:rounded-full hover:bg-gray-200 p-2'/>

    </div> 
    </div>
  )
}

export default NavigationTab