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
    
    // Input Data From user
    let nameFormTimer = document.getElementById("nameFormTimer")
    let idFormTimer = document.getElementById("idFormTimer")
    let timeFormTimer = document.getElementById("timeFormTimer")
    let locationFormTimer = document.getElementById("locationFormTimer")
    
    // object Data
    let newTimer = {
        user: nameFormTimer.value,
        userId: idFormTimer.value,
        timeTimer: timeFormTimer.value,
        place: locationFormTimer.value
    }

    // push Data in arr
    arrData.push(newTimer)

    // Data value to Show
    let nameShow = document.getElementById("nameShow")
    let idShow = document.getElementById("idShow")
    let timeShow = document.getElementById("timeShow")
    let placeShow = document.getElementById("placeShow")
    let timer = document.getElementById("timer")

    // Convert minutes to a timer
    let hours = Math.floor(arrData[arrData.length - 1].timeTimer / 60)
    let min = Math.floor(arrData[arrData.length - 1].timeTimer % 60)
    let sec = (arrData[arrData.length - 1].timeTimer * 60) % 60

    var time = setInterval (counter, 1000)

    function counter() {
        sec--
        if (sec == -1) {
            sec = 59;
            min--
        }
        if (min == -1) {
            min = 59
            hours--
        }

        if (+(arrData[arrData.length - 1].timeTimer) == 0 || arrData[arrData.length - 1].timeTimer == "") {
            timer.innerHTML = "لا يوجد معلومات"
        } else {
            timer.innerHTML = `${sec} : ${min} : ${hours}`
        }
        
        if (hours == 0 && min == 0 && sec == 0) {
            clearInterval(time)
            timer.innerHTML = "انتهي وقت التعقيم"

            setTimeout(()=>{
                location.reload()
            }, 3000)
        }
    }

    // Show All Data
    nameShow.innerHTML = newTimer.user
    idShow.innerHTML = newTimer.userId
    timeShow.innerHTML = `${newTimer.timeTimer} دقيقة`
    placeShow.innerHTML = newTimer.place
    timer.innerHTML = newTimer.place

    let boxs = document.querySelectorAll(".container .box")

    boxs.forEach((e)=> {
        if (e.querySelector("h2").innerHTML === placeShow.innerHTML) {
            console.log(e)
        }
    })
}



function closeTimer() {
    location.reload()
    let showTime = document.getElementById("showTime")
    showTime.style.top ="-100%"
}

function openTimer() {
    let showTime = document.getElementById("showTime")
    showTime.style.top ="50%"
}

