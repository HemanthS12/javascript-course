const clock = document.querySelector('#clock');

// A method in events which runs every moment or to have control when to change
// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)