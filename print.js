
const d1=document.getElementById('days');
const h1=document.getElementById('hour');
const m1=document.getElementById('minutes');
const s1=document.getElementById('seconds');


const newYear='01 Jan 2022';

function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate= new Date();

    const X=newYearDate-currentDate;
    const days=Math.floor(X/1000/60/60/24);

    const hours =Math.floor(X/1000/60/60)%24;
    
    const minute=Math.floor(X/1000/60)%60;
    const second =Math.floor(X/1000)%60;

    d1.innerHTML=days;
    h1.innerHTML=hours;
    m1.innerHTML=minute;
    s1.innerHTML=second;

}
setInterval(countdown,1000);

countdown();

//setInterval(countdown,1000);

