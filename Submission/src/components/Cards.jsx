import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement,Tooltip,Legend);

const data = {
  datasets:[
    {
      
      data:[60,40,100],
      backgroundColor:[
        'rgba(255, 203, 73, 1)',
        'rgba(116, 100, 255, 1)',
        'rgba(79, 210, 181, 1)'
      ],
      borderColor:[
        'rgba(255, 203, 73, 1)',
        'rgba(116, 100, 255, 1)',
        'rgba(79, 210, 181, 1)'
      ],
      borderWidth:1,
      cutout: '75%',
      hoverOffset: 10,
    }
  ]
}
const Cards = ({legend1,legend2,legend3,value1,value2,value3,title}) => {
  return (
    <div className='border rounded-md shadow-md p-4 flex flex-col w-60 gap-2 hover:shadow-xl hover:scale-105'>
    <p>{title}</p>
   <Doughnut data={data} className='mb-4' />
   <div className='flex flex-row justify-between bg-gradient-to-r from-[#FFFFFF] to-[#FFCB49] px-2 rounded-md'>
    <p>{legend1}</p>
    <p>{value1}</p>
   </div>
   <div className='flex flex-row justify-between  bg-gradient-to-r from-[#FFFFFF] to-[#7464FF] px-2 rounded-md'>
    <p>{legend2}</p>
    <p>{value2}</p>
   </div>
   <div className='flex flex-row justify-between  bg-gradient-to-r from-[#FFFFFF] to-[#4FD2B5] px-2 rounded-md'>
    <p>{legend3}</p>
    <p>{value3}</p>
   </div>
   </div>
  )
}

export default Cards