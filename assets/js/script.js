// find out time from Moment js - right now

// In production though, just use null' or mabye undefined' here to get the true current time.
var actualTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().format('HH'); //text

console.log (actualTime);
console.log (currentHour);



// write time in space after "my website" in "header"

$("#currentDay").append(actualTime)

// Epic Get Element by Id list!!!!
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
var nineAmEl = document.getElementById("9amDiv");
var nineAmSubEl = document.getElementById("9amsubmit")

var tenAmEl = document.getElementById("10amDiv");
var tenAmSubEl = document.getElementById("10amsubmit")

var elevenAmEl = document.getElementById("11amDiv")
var elevenAmSubEl = document.getElementById("11amsubmit")

var noonPmEl = document.getElementById("12pmDiv")
var noonPmSubEl = document.getElementById("12pmsubmit")

var onePmEl = document.getElementById("1pmDiv")
var onePmSubEl = document.getElementById("1pmsubmit")

var twoPmEl = document.getElementById("2pmDiv")
var twoPmSubEl = document.getElementById("2pmsubmit")

var threePmEl = document.getElementById("3pmDiv")
var threePMSubEl = document.getElementById("3pmsubmit")

var fourPmEl = document.getElementById("4pmDiv")
var fourPmSubEl = document.getElementById("4pmsubmit")

var fivePmEl = document.getElementById("5pmDiv")
var fivePmSubEl = document.getElementById("5pmsubmit")



// I'm serving some serious CopyPasta HERE!!! but I didn't know another way to do it!

var timeHandler = function(){
    if (9 === parseInt(currentHour)) {
        nineAmEl.style.backgroundColor = "#ff6961";
    } else if (9 > parseInt(currentHour)) {
        nineAmEl.style.backgroundColor = "#77dd77"
    } else {
        nineAmEl.style.backgroundColor = "#d3d3d3"}

        if (10 === parseInt(currentHour)) {
            tenAmEl.style.backgroundColor = "#ff6961"
        } else if (10 > parseInt(currentHour)) {
            tenAmEl.style.backgroundColor = "#77dd77"
        } else {
            tenAmEl.style.backgroundColor = "#d3d3d3"}

            if (11 === parseInt(currentHour)) {
                elevenAmEl.style.backgroundColor = "#ff6961"
            } else if (11 > parseInt(currentHour)) {
                elevenAmEl.style.backgroundColor = "#77dd77"
            } else {
                elevenAmEl.style.backgroundColor = "#d3d3d3"}

                if (12 === parseInt(currentHour)) {
                    noonPmEl.style.backgroundColor = "#ff6961"
                } else if (12 > parseInt(currentHour)) {
                    noonPmEl.style.backgroundColor = "#77dd77"
                } else {
                    noonPmEl.style.backgroundColor = "#d3d3d3"}

                    if (13 === parseInt(currentHour)) {
                        onePmEl.style.backgroundColor = "#ff6961"
                    } else if (13 > parseInt(currentHour)) {
                        onePmEl.style.backgroundColor = "#77dd77"
                    } else {
                        onePmEl.style.backgroundColor = "#d3d3d3"}

                        if (14 === parseInt(currentHour)) {
                            twoPmEl.style.backgroundColor = "#ff6961"
                        } else if (14 > parseInt(currentHour)) {
                            twoPmEl.style.backgroundColor = "#77dd77"
                        } else {
                            twoPmEl.style.backgroundColor = "#d3d3d3"}

                            if (15 === parseInt(currentHour)) {
                                threePmEl.style.backgroundColor = "#ff6961"
                            } else if (15 > parseInt(currentHour)) {
                                threePmEl.style.backgroundColor = "#77dd77"
                            } else {
                                threePmEl.style.backgroundColor = "#d3d3d3"}

                                if (16 === parseInt(currentHour)) {
                                    fourPmEl.style.backgroundColor = "#ff6961"
                                } else if (16 > parseInt(currentHour)) {
                                    fourPmEl.style.backgroundColor = "#77dd77"
                                } else {
                                    fourPmEl.style.backgroundColor = "#d3d3d3"}

                                    if (17 === parseInt(currentHour)) {
                                        fivePmEl.style.backgroundColor = "#ff6961"
                                    } else if (17 > parseInt(currentHour)) {
                                        fivePmEl.style.backgroundColor = "#77dd77"
                                    } else {
                                        fivePmEl.style.backgroundColor = "#d3d3d3"}       
}

timeHandler()

//Local Storage Saving Per save button

nineAmSubEl.addEventListener("click", function() {
 let workTask9am = document.getElementById("9amDiv").value;
    localStorage.setItem("9amDiv", workTask9am);
});

tenAmSubEl.addEventListener("click", function() {
    let workTask10am = document.getElementById("10amDiv").value;
        localStorage.setItem("10amDiv", workTask10am);
});

elevenAmSubEl.addEventListener("click", function() {
    let workTask11am = document.getElementById("11amDiv").value;
        localStorage.setItem("11amDiv", workTask11am);
});

noonPmSubEl.addEventListener("click", function() {
    let workTask12pm = document.getElementById("12pmDiv").value;
        localStorage.setItem("12pmDiv", workTask12pm);
});

onePmSubEl.addEventListener("click", function(){
    let workTask1pm = document.getElementById("1pmDiv").value;
        localStorage.setItem("1pmDiv", workTask1pm);
});

twoPmSubEl.addEventListener("click", function() {
    let workTask2pm = document.getElementById("2pmDiv").value;
        localStorage.setItem("2pmDiv", workTask2pm);
});

threePMSubEl.addEventListener("click", function() {
    let workTask3pm = document.getElementById("3pmDiv").value;
        localStorage.setItem("3pmDiv", workTask3pm);
});

fourPmSubEl.addEventListener("click", function(){
    let workTask4pm = document.getElementById("4pmDiv").value;
        localStorage.setItem("4pmDiv", workTask4pm);
});

fivePmSubEl.addEventListener("click", function(){
    let workTask5pm = document.getElementById("5pmDiv").value;
        localStorage.setItem("5pmDiv", workTask5pm);
});



//Display Local storage Values in currect areas
function storageRetrieve () {
    let saved9amTask = localStorage.getItem("9amDiv")
   document.getElementById("9amDiv").innerText = saved9amTask

    let saved10amTask = localStorage.getItem("10amDiv")
    document.getElementById("10amDiv").innerText = saved10amTask

    let saved11amTask = localStorage.getItem("11amDiv")
    document.getElementById("11amDiv").innerText = saved11amTask

    let saved12pmTask = localStorage.getItem("12pmDiv")
    document.getElementById("12pmDiv").innerText = saved12pmTask

    let saved1pmTask = localStorage.getItem("1pmDiv")
    document.getElementById("1pmDiv").innerText = saved1pmTask

    let saved2pmTask = localStorage.getItem("2pmDiv")
    document.getElementById("2pmDiv").innerText = saved2pmTask

    let saved3pmTask = localStorage.getItem("3pmDiv")
    document.getElementById("3pmDiv").innerText = saved3pmTask

    let saved4pmTask = localStorage.getItem("4pmDiv")
    document.getElementById("4pmDiv").innerText = saved4pmTask

    let saved5pmTask = localStorage.getItem("5pmDiv")
    document.getElementById("5pmDiv").innerText = saved5pmTask
}

//Call funciton on Load:

storageRetrieve()


// var hourBlock = function(hour) {
//     var timeClass ="";
//     if (hour === parseInt(currentHour)) {
//         timeClass = "present";
//     } else if (hour > parseInt(currentHour)) {
//         timeClass = "future"
//     } else {
//         timeClass = "past"
//     }
//     var hourDiv = $(`<div class="hour-${hour} ${timeClass} row">`); 
//     //timestamp
//     var timestamp = $(`<div class="time-${hour} col-2 time-block">`).append(hour)
//     //description
//     var textarea = $(`<textarea class="description text-${hour} col-8">`)
//     //save button
//     var saveButton = $(`<button class="saveBtn button-${hour} col-2">`).text("save") // fount awesome for an image
//     hourDiv.append(timestamp, textarea, saveButton)
//     $(".container").append(hourDiv)
   
// }

// for (let i = 9; i < 17; i++) {
//     hourBlock(i)}
