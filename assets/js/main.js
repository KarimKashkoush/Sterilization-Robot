
function signIn() {
    let form = document.getElementById("form")
    form.style.right = "-350px"
}

function signUp() {
    form.style.right = "10px"
}

function dataTimer() {
    let arrData = []
    
    let nameFormTimer = document.getElementById("nameFormTimer")
    let idFormTimer = document.getElementById("idFormTimer")
    let timeFormTimer = document.getElementById("timeFormTimer")
    let locationFormTimer = document.getElementById("locationFormTimer")
    
    let newTimer = {
        user: nameFormTimer.value,
        userId: idFormTimer.value,
        timeTimer: timeFormTimer.value,
        place: locationFormTimer.value
    }

    arrData.push(newTimer)
    
    let nameShow = document.getElementById("nameShow")
    let idShow = document.getElementById("idShow")
    let timeShow = document.getElementById("timeShow")
    let placeShow = document.getElementById("placeShow")

    nameShow.innerHTML = newTimer.user
    idShow.innerHTML = newTimer.userId
    timeShow.innerHTML = newTimer.timeTimer
    placeShow.innerHTML = newTimer.place

}

function closeTimer() {
    let showTime = document.getElementById("showTime")
    showTime.style.top ="-100%"
}

function openTimer() {
    let showTime = document.getElementById("showTime")
    showTime.style.top ="50%"
}


