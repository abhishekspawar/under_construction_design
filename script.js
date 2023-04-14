const days = document.getElementById('days')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const seconds = document.getElementById('seconds')
const timer = document.getElementById('timer');

const webReleaseDate = new Date(2023,3,15).getTime();



window.onload = () =>{
 
    let x = setInterval(()=>{
        const now = new Date().getTime();

        const difference = webReleaseDate - now;
        const daysRemains = Math.floor(difference/(1000*60*60*24));
        const hoursRemains = Math.floor((difference%(1000*60*60*24))/(1000*60*60)) 
        const minutesRemains = Math.floor((difference%(1000*60*60))/(1000*60)) 
        const secondsRemains = Math.floor((difference%(1000*60))/1000) 
        
        days.innerHTML = daysRemains;
        hours.innerHTML = hoursRemains;
        minutes.innerHTML = minutesRemains;
        seconds.innerHTML= secondsRemains;

        if(difference<0){
            clearInterval(x);
            timer.innerHTML =' <h2>Thank You For Your Patience ...</h3>'
        }
    },1000);

}