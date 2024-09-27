
import { useGSAP } from '@gsap/react';
import './App.css';
import gsap from 'gsap';
import { useState } from 'react';
import ballImage from './pngegg.png';

// gsap ko use krny ke liye phly osko gsap react ki web pr jakr npm ki cammand chalani hogi phir 
// ye gsap ka hook he osky ander hm gsap ka kam kr skty hen
gsap
  // ye gsap likhengy jujection sy 2 gsap pr click krengy phir bhaly hm gsap ko mitaden
  function App() {
   
    const [circle1, setCircle1] = useState(0);
    const [circle2, setCircle2] = useState(0);
    const [circle3, setCircle3] = useState(0);


    const randomVal = gsap.utils.random(-400, 300, 10);
    const randomVal2 = gsap.utils.random(-100, 100, 10);
    const randomVal3 = gsap.utils.random(-60, 60, 10);

    // ak x ke liye or ak y ke liye ak rotate ke liye

// gsap ka apna ak method he random ka osmy hmy perameters dena hota he ke kha sy kha tk ke numbers chiye hmy hmny yha likhe he ke - 500 sy 500 ke darmiyan aygy numbers
// end me 10 ka matlb he wo 510 520 580 90 esy value dega bich ki nhi dega ke 544 ya 577 esy
 useGSAP(()=>{
  // hmy search krna he gsap utils than wha inky animations ke methods hoty hen
gsap.to("#ball",{
  x:circle1,
 y:circle2,
 rotateX:circle3,

  // isy ye hoga ke jb bhi x pr wo animat hoga to random yani usecontext me jo value aygi otna move hoga
  duration:1,
  ease:0.8

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

