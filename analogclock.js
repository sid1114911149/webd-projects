setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrot=htime*30+mtime/2;
    mrot=6*mtime;
    srot=6*stime;
    hours.style.transform=`rotate(${hrot}deg)`;
    minutes.style.transform=`rotate(${mrot}deg)`;
    seconds.style.transform=`rotate(${srot}deg)`;
},1000)