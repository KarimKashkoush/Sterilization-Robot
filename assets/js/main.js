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

            alert("تم انتهاء التعقيم");

            location.reload()
        }
    }

    // Show All Data
    if (newTimer.user == "") {
        nameShow.innerHTML = "لا يوجد اسم"
    } else {
        nameShow.innerHTML = newTimer.user
    }

    if (newTimer.userId == "") {
        idShow.innerHTML = "لا يوجد رقم تعريفي"
    } else {
        idShow.innerHTML = newTimer.userId
    }

    if (newTimer.userId == "") {
        timeShow.innerHTML = "لا يوجد مدة تعقيم"
    } else {
        timeShow.innerHTML = `${newTimer.timeTimer} دقيقة`
    }
    
    if (newTimer.place == "" || newTimer.place == "00") {
        placeShow.innerHTML = "لا يوجد مكان"
    } else {
        placeShow.innerHTML = newTimer.place
    }

    if (newTimer.place == "") {
        timer.innerHTML = "لا يوجد مؤقت"
    } else {
        timer.innerHTML = newTimer.place
    }
}



function closeTimer() {
    let showTime = document.getElementById("showTime")

        var result = confirm("هل ترغب في غلق التعقيم بشكل نهائي ؟");

        if (result == true) {
            alert("تم غلق التعقيم");
            location.reload()
            showTime.style.top ="-100%"

        } else {
            alert("لن يتم غلق التعقيم");
        }
    
}

function openTimer() {
    let showTime = document.getElementById("showTime")
    showTime.style.top ="50%"
}

