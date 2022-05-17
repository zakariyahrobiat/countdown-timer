eldDate = "07 10 2022"

setInterval( countdown, 1000);

daysEl = document.querySelector(".days")
hoursEl = document.querySelector(".hours")
minutesEl = document.querySelector(".minutes")
secondsEl = document.querySelector(".seconds")

function countdown(){
    eldNewDate = new Date(eldDate)
    date = new Date()

    totalCountdownDateInSeconds = (eldNewDate - date)/1000
    days = Math.floor((totalCountdownDateInSeconds/3600)/24)
    hours = Math.floor((totalCountdownDateInSeconds/3600)%24)
    minutes = Math.floor((totalCountdownDateInSeconds/60)%60)
    seconds = Math.floor(totalCountdownDateInSeconds%60)

    daysEl.innerHTML = days < 10? `0${days}` : days
    hoursEl.innerHTML = hours  < 10? `0${hours}` : hours
    minutesEl.innerHTML = minutes < 10? `0${minutes}` : minutes
    secondsEl.innerHTML = seconds < 10? `0${seconds}` : seconds

    
}
countdown()