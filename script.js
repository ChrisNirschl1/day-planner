var currentDay = moment().format("dddd[,] MMMM Do [at] HH:mm:ss");
$("#currentDay").text(currentDay);


setInterval (function(){
    var currentTime = moment().format("dddd[,] MMMM Do [at] HH:mm:ss")
    $("#currentDay").text(currentTime)

}, 1000) 


var hour = moment().format("HH");
console.log(hour);



var hour9 = $("#9")
var hour10 = $("#10")
var hour11 = $("#11")
var hour12 = $("#12")
var hour13 = $("#13")
var hour14 = $("#14")
var hour15 = $("#15")
var hour16 = $("#16")
var hour17 = $("#17")

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

var saveBtn = $(".savebtn")
saveBtn.on("click", function(){
    $(this).preventDefault();
    var writing = $(this).siblings(".planner").val();
    var timing = $(this).siblings(".planner").attr("id");

})

