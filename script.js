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