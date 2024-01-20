let btn = document.getElementById("btn-Start");
let nameInput = document.getElementById("nameInput");
let locationInput = document.getElementById("locationInput");
let idInput = document.getElementById("idInput");
let timeInput = document.getElementById("timeInput");

btn.onclick = (e)=> {
    e.preventDefault()
    console.log(nameInput.value)
    console.log(idInput.value)
    console.log(timeInput.value)
    console.log(locationInput.value)
}


