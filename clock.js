let p=document.querySelector(".clock");
setInterval(showtime,1000);
function showtime(){
    let time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    let am_pm="AM";
    if(hours>=12){
        if(hours>12){
            hours=hours-12;
        }
        am_pm="PM"
    }else{
        am_pm="AM"
    }
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?")"+seconds:seconds;
    p.innerText=`${hours}:${minutes}:${seconds} ${am_pm}`;
}
showtime();