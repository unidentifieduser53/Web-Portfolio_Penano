const message = document.getElementById("message")
const mama = document.getElementById("mama")
const Button1 = document.getElementById("Btn1")
const Button2 = document.getElementById("Btn2")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule = document.getElementById("schedule")

Button1.addEventListener("click", function(){
    message.innerHTML = "Loading Dashboard...";
    message.style.color = "orange"
    profile.innerHTML = "Profile: Waiting...";
    grades.innerHTML = "Grades: Waiting...";
    schedule.innerHTML = "Schedule: Waiting...";

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML = "Profile: Dwight Zahckarry Paul S. Peñano";
            profile.style.color = "orange"

            resolve();
        },1000)
    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            grades.innerHTML = "Grades: 99.99% of germs";
            grades.style.color = "orange"


            resolve();
        },2000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedule: Basta whole day";
            schedule.style.color = "orange"

            resolve();
        },3000)
    })

    const messagePromise = new Promise(function(resolve){
        setTimeout(function(){
            message.innerHTML = "Profile";
            message.style.color = "orange"

            resolve();
        },3000)
    })
    
})

Button2.addEventListener("click", function(){
    message.innerHTML = "Loading Dashboard...";
    message.style.color = "orange"
    profile.innerHTML = "Profile: Waiting...";
    grades.innerHTML = "Grades: Waiting...";
    schedule.innerHTML = "Schedule: Waiting...";
    Button1.style.backgroundColor = "red"
    Button2.style.backgroundColor = "green"

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML = "Profile: Loaded";
            profile.style.color = "orange"

            resolve();
        },1000)
    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            grades.innerHTML = "Grades: Loaded";
            grades.style.color = "orange"


            resolve();
        },2000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedule: Loaded";
            schedule.style.color = "orange"

            resolve();
        },3000)
    })

    const messagePromise = new Promise(function(resolve){
        setTimeout(function(){
            message.innerHTML = "RENEEEEEEEE";
            message.style.color = "orange"

            resolve();
        },3000)
    })

    const mamaPromise = new Promise(function(resolve){
        setTimeout(function(){
            mama.innerHTML = "MAMAAAAAAAA!!!";
            mama.style.color = "orange"

            resolve();
        },3000)
    })
    
})

