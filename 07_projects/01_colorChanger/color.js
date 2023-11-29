const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button) {
    // console.log(button); // Now we add eventlistener to each of the buttons
    button.addEventListener('click', function (e) {
        console.log(e);
        // console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
        }
    })
})
