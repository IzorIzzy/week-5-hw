   $(".saveBtn").on('click', function(){

        var row = $(this).parent().attr("id")
        console.log("ROW", row);

        var textArea = $(this).siblings(".description").val();
        console.log("TEXT", textArea)

        localStorage.setItem(row, textArea)
})

// create a function that tests whether each timeblock is the past present or future
function timeUpdater () {
// get the current time
var currentHour = moment().hour();

//Loop over the time blocks in your html code
$('.time-block').each(function(){
    var timeblockHour = parseInt($(this).attr("id").split("hour")[1]);
        $(this).value()
    console.log( "this is the time block hour: " + timeblockHour);
})

//check if the value (the number of the timeblockHour is less than, equal to, or greater than the currentHour)

//Then, add a class to each timeblockHour: .past, or .present, or .future so that your css (which already has these classes with background colors coded) can change the background color in each of these time-block hour elements in your html to the corresponding correct color.

if (timeblockHour < currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
} else if (timeblockHour === currentHour) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
} else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}



}

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeUpdater();




// youre going to need to add a momen t.js script at the bottom of your html (google moment.js)
// youre going to want to test the current hour of the day with moment.js against each timeblocks "value" (look at your html)

// get all the items from localstorage so when you refresh the page they stay in their respective timeblock