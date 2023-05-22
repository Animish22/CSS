setInterval(() => {
    let date   = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hrRotation = hour*30  + min/2;
    minRotation  = 6*min;
    secRotation = 6*sec;

    document.getElementById('hour').style.transform =  `rotate(${hrRotation}deg)`;
    document.getElementById('min').style.transform =  `rotate(${minRotation}deg)`;
    document.getElementById('sec').style.transform =  `rotate(${secRotation}deg)`;

}, 1000);