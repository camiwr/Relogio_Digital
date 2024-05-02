function updateTime() {
    const months = document.getElementById('months');
    const day = document.getElementById('day');
    const year = document.getElementById('year');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    let now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let mon = monthNames[now.getMonth()];
    let dy = now.getDate();
    let yr = now.getFullYear();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();


    if (dy < 10) dy = '0' + dy;

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (sec < 10) sec = '0' + sec;


    months.textContent = mon;
    day.textContent = dy;
    year.textContent = yr;
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;

}

setInterval(updateTime, 1000);
updateTime();
