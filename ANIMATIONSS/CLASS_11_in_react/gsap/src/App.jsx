
import { useGSAP } from '@gsap/react';
import './App.css';
import gsap from 'gsap';
import { useState } from 'react';
import ballImage from './pngegg.png';


  function App() {
   
 useGSAP(()=>{

gsap.to({


})
 },[circle1,circle2,circle3])
//  yha hmy source bhi dena hota he

// ******************************************************************


  return (
    <>

      <main className='h-lvh w-full bg-transparent p-[20px] flex justify-center items-center'>

      <button className='bg-pink-700 h-[70px] text-white w-[160px] relative bottom-[280px] left-[170px] rounded-[50%] border-solid border-yellow-400 border-[6px] text-[30px] font-bold' onClick={()=>{
        setCircle1(randomVal)
        setCircle2(randomVal2)
        setCircle3(randomVal3)
        // hr click pr usecontext chang hoga
      }}>FLYING</button>
      <div id="ball" className=' mt-[50px] mr-[10px] rounded-[50%] '    style={{
    position: 'relative',
    backgroundImage: `url(${ballImage})`,
    backgroundSize: '220px',
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    height: '300px',
    width: '300px'
  }}
>
       
      </div>
      </main>
    </>
  )
}


export default App

