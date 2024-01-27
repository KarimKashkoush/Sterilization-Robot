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

    var time = setInterval(counter, 1000)

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

        // 
        if (+(arrData[arrData.length - 1].timeTimer) == 0 || arrData[arrData.length - 1].timeTimer == "") {
            timer.innerHTML = "لا يوجد معلومات"
        } else {
            timer.innerHTML = `${sec} : ${min} : ${hours}`
        }


        if (hours == 0 && min == 0 && sec == 0) {
            var locationFormTimerValue = locationFormTimer.value;

            var selectBox = document.getElementById("box" + locationFormTimerValue);

            selectBox.style.backgroundColor = "green"

            localStorage.setItem("box" + locationFormTimerValue, "green");


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

    if (newTimer.timeTimer == "") {
        timeShow.innerHTML = "لا يوجد مدة تعقيم"
    } else {
        timeShow.innerHTML = `${newTimer.timeTimer} دقيقة`
    }


    if (newTimer.place == "1") {
        newTimer.place = "غرفة عمليات 1"
    }

    if (newTimer.place == "3") {
        newTimer.place = "غرفة اقامة مريض 1"
    }

    if (newTimer.place == "4") {
        newTimer.place = "غرفة اقامة مريض 2"
    }

    if (newTimer.place == "5") {
        newTimer.place = "غرفة اقامة مريض 3"
    }

    if (newTimer.place == "2") {
        newTimer.place = "غرفة عمليات 2"
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

for (var i = 1; i <= 5; i++) {
    var storedColor = localStorage.getItem("box" + i);
    if (storedColor) {
        document.getElementById("box" + i).style.backgroundColor = storedColor;
    }
}

let shangeColor = document.querySelectorAll(".box button")

shangeColor.forEach((e) => {
    e.onclick = () => {
        localStorage.removeItem(e.parentElement.id);
        location.reload();
    }
})

let boxs = document.querySelectorAll(".box");

boxs.forEach((b) => {
    if (b.style.backgroundColor == "green") {
        b.querySelector("p").innerHTML = "معقم"
        b.querySelector("button").style.display= " block"
    }
})

function closeTimer() {
    let showTime = document.getElementById("showTime")

    var result = confirm("هل ترغب في غلق التعقيم بشكل نهائي ؟");

    if (result == true) {
        alert("تم غلق التعقيم");
        location.reload()
        showTime.style.top = "-100%"

    } else {
        alert("لن يتم غلق التعقيم");
    }

}

function openTimer() {
    let showTime = document.getElementById("showTime")
    showTime.style.top = "50%"
}


let gitDate = setInterval(() => {
    let tim = new Date()
    
    let h = tim.getHours() 
    let m = tim.getMinutes() 
    let s = tim.getSeconds()
    let day = tim.getDay()
    let date = tim.getDate()  
    let mon = (tim.getMonth() + 1)
    let year = (tim.getFullYear())
    let situation;

    if (h < 12) {
        situation = "AM"
    } else {
        situation = "PM"
    }

    if (day == 0) {
        day = "الأحد"
    } else if (day == 1) {
        day = "الاثنين"
    } else if (day == 2) {
        day = "الثلاثاء"
    } else if (day == 3) {
        day = "الأربعاء"
    } else if (day == 4) {
        day = "الخميس"
    } else if (day == 5) {
        day = "الجمعة"
    } else if (day == 6) {
        day = "السبت"
    }
    
    if (h >= 13) {
        h -= 12
    } else {
        h = h
    }
    
    if (s <= 9) {
        s =  "0" + s
    } else {
        s = s
    }
    
    if (m <= 9) {
        m =  "0" + m
    } else {
        m = m
    }
    
    if (h <= 9) {
        h =  "0" + h
    } else {
        h = h
    }

    let timeNow = document.getElementById("timeNow");
    let dateNow = document.getElementById("dateNow");
    let dayNow = document.getElementById("dayNow");

    
    timeNow.innerHTML = `${h} : ${m} : ${s} ${situation}`
    dateNow.innerHTML = `${date} / ${mon} / ${year}`
    dayNow.innerHTML = day

}, 1000);