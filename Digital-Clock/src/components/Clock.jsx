import { useEffect,useState } from "react";
export default function Clock(){

    const [time,setTime] = useState(new Date());

    useEffect(()=>{
       
        const intervalId = setInterval(()=>{
              setTime(new Date());
        },1000);

        return () =>{
            clearInterval(intervalId);
        }

    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours>=12 ? "PM" : "AM";

        hours = hours %12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`;
    }

    function padZero(number){

        return (number < 10 ? "0" : "") + number;
        

    }


    return (<div className="outer-box">
        <div className="clock-box">
       <span><h1 className="clock">{formatTime()}</h1></span>
    </div></div>);
}