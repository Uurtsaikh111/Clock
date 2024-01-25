import React from "react";
import Clock from 'react-live-clock';

const Clocker=()=>{
    return <div className="w-[500px] h-[500px] p-[30px] bg-slate-500 m-auto">

<div className="text-white p-[170px]"><Clock 
          format={'h:mm:ssa'} 
          style={{fontSize: '1.5em'}} 
          ticking={true} /> 
          </div>
    </div>
}
export default Clocker;