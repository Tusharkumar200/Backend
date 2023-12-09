import { useEffect } from "react";
import { useState } from "react";

export function CurrentTime(){
    const [time,setTime] = useState(new Date());
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }
    },[]);

    const current_date = time.toLocaleDateString();
    const current_time = time.toLocaleTimeString();
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Todays Date :{current_date} </p>
                    <p>This is the Current Time : {current_time}
                    </p>

                </div>
            </div>
        </div>
    )
}