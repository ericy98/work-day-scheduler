var today = moment().format("[Today is] dddd, MMMM Do YYYY");
    $("#currentDay").text(today);

//time selectors
var timeBlock = $(".time-block");
var taskText = $("#task-description");
var saveBtn = $(".saveBtn");

// loading in text values
$("#time-9 #task-description").val(localStorage.getItem("time-9"));
$("#time-10 #task-description").val(localStorage.getItem("time-10"));
$("#time-11 #task-description").val(localStorage.getItem("time-11"));
$("#time-12 #task-description").val(localStorage.getItem("time-12"));
$("#time-13 #task-description").val(localStorage.getItem("time-13"));
$("#time-14 #task-description").val(localStorage.getItem("time-14"));
$("#time-15 #task-description").val(localStorage.getItem("time-15"));
$("#time-16 #task-description").val(localStorage.getItem("time-16"));
$("#time-17 #task-description").val(localStorage.getItem("time-17"));

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
    // listeners
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings("#task-description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    });
};

var timeCheck = setInterval(timeUpdate, 15000);
timeUpdate();
