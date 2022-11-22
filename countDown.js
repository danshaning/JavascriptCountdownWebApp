const countdown = () => {
    const countDate = new Date("September 5, 2022 00:00:00").getTime()
    const now =  new Date().getTime();
    const gap = countDate - now;



    const second = 1000;
    const min = second * 60;
    const hour = min * 60;
    const day = hour * 24;


    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day)/ hour);
    const textMin = Math.floor((gap % hour)/ min);
    const textSecond = Math.floor((gap % min)/ second);


    document.querySelector(".day").textContent = textDay;
    document.querySelector(".hour").textContent = textHour;
    document.querySelector(".min").textContent = textMin;
    document.querySelector(".second").textContent = textSecond;
} 

setInterval(countdown, 1000);