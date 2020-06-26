var today = moment().format("[Today is] dddd, MMMM Do YYYY");
    $("#currentDay").text(today);

//time selectors
var timeBlock = $(".time-block");
var taskText = $("#task-description");
var saveBtn = $(".saveBtn");
var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

var timeUpdate = function() {
    var currentTime = moment().hour();
    
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("-")[1])
        
        if(timeBlock < currentTime) {
            $(this).addClass("past");
        }
        else if(timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });


var timeCheck = setInterval(timeUpdate, 15000);
timeUpdate();
