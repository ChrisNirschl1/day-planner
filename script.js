//Set day out
// var currentDay = moment().format("dddd[,] MMMM Do [at] HH:mm:ss");
// $("#currentDay").text(currentDay);

//Runs function on an interval for seconds
setInterval (function(){
    var currentTime = moment().format("dddd[,] MMMM Do [at] HH:mm:ss")
    $("#currentDay").text(currentTime)

}, 1000) 

//Test for hours
var hour = moment().format("HH");
console.log(hour);


//Variables I though I'd need
// var hour9 = $("#9")
// var hour10 = $("#10")
// var hour11 = $("#11")
// var hour12 = $("#12")
// var hour13 = $("#13")
// var hour14 = $("#14")
// var hour15 = $("#15")
// var hour16 = $("#16")
// var hour17 = $("#17")

//Matches the hour to a preset time, then changes the color if it's the future or present
function changeColor(){
    var plannerTime = moment().format("HH");
    

    if (plannerTime === "9"){
        $("#9").addClass("present");
        $("#10, #11, #12, #13, #14, #15, #16, #17").addClass("future");
    }
    if (plannerTime === "10"){
        $("#10").addClass(present);
        $("#11, #12, #13, #14, #15, #16, #17").addClass("future");
    }
    if (plannerTime === "11") {
      $("#11").addClass("present");
      $("#12, #13, #14, #15, #16, #17").addClass("future");  
    }
    if (plannerTime === "12") {
        $("#12").addClass("present");
        $("#13, #14, #15, #16, #17").addClass("future");
    }
    if (plannerTime === "13"){
        $("#13").addClass("present");
        $("#14, #15, #16, #17").addClass("future");
    }
    if (plannerTime === "14"){
        $("#14").addClass("present");
        $("#15, #16, #17").addClass("future");

    }
    if (plannerTime === "15") {
        $("#15").addClass("present");
        $("#16, #17").addClass("future");
    }
    if (plannerTime === "16"){
        $("#16").addClass("present");
        $("#17").addClass("future");
    }
    if (plannerTime === "17"){
        $("#17").addClass("present");
    }
}

changeColor();
//Save to local storage
var saveBtn = $(".saveBtn")
saveBtn.on("click", function(){
   
    var writing = $(this).siblings(".planner").val();
    var timing = $(this).siblings(".planner").attr("id");
console.log(writing)
console.log(timing)
localStorage.getItem(writing, timing)
})
//Should move it to local storage and dispay it on screen after refresh
var nineTime = localStorage.getItem(9)
$("#9").val(nineTime)

var tenTime = localStorage.getItem(10)
$("#10").val(tenTime)

var elevenTime = localStorage.getItem(11)
$("#11").val(elevenTime)

var twelveTime = localStorage.getItem(12)
$("#12").val(twelveTime)

var thirteenTime = localStorage.getItem(13)
$("#13").val(thirteenTime)

var fourteenTime = localStorage.getItem(14)
$("#14").val(fourteenTime)

var fifteenTime = localStorage.getItem(15)
$("#15").val(fifteenTime)

var sixteenTime = localStorage.getItem(16)
$("#16").val(sixteenTime)

var seventeenTime = localStorage.getItem(17)
$("#17").val(seventeenTime)

