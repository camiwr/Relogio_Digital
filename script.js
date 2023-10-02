function updateTime() {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    let now = new Date();
    let hr = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    
    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (sec < 10) s = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
}

setInterval(updateTime, 1000);
updateTime();
