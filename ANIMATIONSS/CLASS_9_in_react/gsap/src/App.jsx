
import { useGSAP } from '@gsap/react'
import './App.css'
import gsap from 'gsap'
import { useRef } from 'react'

// gsap ko use krny ke liye phly osko gsap react ki web pr jakr npm ki cammand chalani hogi phir 
// ye gsap ka hook he osky ander hm gsap ka kam kr skty hen
gsap
  // ye gsap likhengy jujection sy 2 gsap pr click krengy phir bhaly hm gsap ko mitaden
function App() {
// ******************************************************************

// const gsapref =useRef()
//  useGSAP(()=>{
// gsap.from(gsapref.current,{
//   // hmny isko useref ka refrence pas krdia ab hm useref wla variable ksi bhi html elemnt me ref{}ke ander pas kry gy ye animation
//   // ospr applay ho jaygi
 
//   duration:1,
//   delay :1,
//   rotate :360
// })
//  })

// ******************************************************************

 useGSAP(()=>{
  gsap.from("#box",{

    duration:1,
    delay :1,
    rotate :360
  })
   },{scope:"#containe"})
  //  scop ko esy likhny sy ye hoga ke ak jesi class box ke bhut sary div hon ya koch bhi ho to wo srif container waly box ko target kryga 
  // ya hm scop me useref ka variable pas krky oski jis div me pass krengy ref{} krky wo osi ke box me applay ho

  return (
    <>

      <main className='h-lvh w-full bg-black p-[20px] flex justify-center items-center'>

    <div id="containe">

    <div id="ball" className='h-[120px] mb-[20px] ml-[20px] rounded-[50%] w-[120px] bg-white'></div>

    <div id="box" /*ref={gsapref}*/ className='h-[130px] ml-[20px] rounded-sm w-[120px] bg-red-700'></div>
    </div>

    <div id="containe2">
    <div id="ball2" className='h-[120px] mb-[20px] ml-[20px] rounded-[50%] w-[120px] bg-white'></div>

    <div id="box2" className='h-[130px] ml-[20px] rounded-sm w-[120px] bg-red-700'></div>
    </div>
      </main>
    </>
  )
}

export default App
