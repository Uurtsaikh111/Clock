 


import { CountdownCircleTimer } from  
'react-countdown-circle-timer'
 
 const Timer=()=>{

    return <div className="w-[500px] h-[500px] p-[30px] bg-slate-200 m-auto">
        <div className='px-[130px] mb-[100px]'>
      <CountdownCircleTimer 
        isPlaying 
        duration={10} 
        colors={[ 
          ['#004777', 0.33], 
          ['#F7B801', 0.33], 
          ['#A30000', 0.33], 
        ]} 
      > 
        {({ remainingTime }) => remainingTime} 
      </CountdownCircleTimer> </div>
<div className='flex gap-[20px] justify-center'>
    <input>{}</input>
    <button>Start</button>
</div>

    </div>
}
export default Timer;