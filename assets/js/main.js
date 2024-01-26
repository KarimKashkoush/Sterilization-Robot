function signIn() {
    let form = document.getElementById("form")
    form.style.right = ""
    form.style.left = "20px"
}

function signUp() {
    let form = document.getElementById("form")
    form.style.left = ""
    form.style.right = "20px"
}


function dataTimer() {
    let arrData = [];

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
    
    let nameShow = document.getElementById("nameShow")
    let idShow = document.getElementById("idShow")
    let timeShow = document.getElementById("timeShow")
    let placeShow = document.getElementById("placeShow")
    let timer = document.getElementById("timer")


    let hours = Math.floor(timeFormTimer.value / 60)
    let min = Math.floor(timeFormTimer.value % 60)
    let sec = (timeFormTimer.value * 60) % 60

    setInterval(() => {
        sec--
        if (sec == -1) {
            sec = 59;
            min--
        }
        if (min == -1) {
            min = 59
            hours--
        }
    
        
        
    
        if (+(timeFormTimer.value) == 0 || timeFormTimer.value == "") {
            timer.innerHTML = "لا يوجد معلومات"
        } else {
            timer.innerHTML = `${sec} : ${min} : ${hours}`
        }
    }, 1000);

    nameShow.innerHTML = newTimer.user
    idShow.innerHTML = newTimer.userId
    timeShow.innerHTML = `${newTimer.timeTimer} دقيقة`
    placeShow.innerHTML = newTimer.place
    timer.innerHTML = newTimer.place
}

function closeTimer() {
    let showTime = document.getElementById("showTime")
    showTime.style.top ="-100%"
}

function openTimer() {
    let showTime = document.getElementById("showTime")
    showTime.style.top ="50%"
}