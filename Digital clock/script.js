const clock = document.getElementById('clock')


//to continously run a function
setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);