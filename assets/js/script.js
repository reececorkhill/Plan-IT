$( document ).ready(function() {

    // Global Variables
    var today = dayjs();
    var currentDate = document.getElementById("#currentDay"); // Getting the currentDay element.
    var timeblocksCtn = document.getElementsByClassName(".container"); // Getting the timeblocks container.
    var workingDay = [
        {
            hour: "9AM", // [0]
            task: "", // [1]
        },
        {
            hour: "10AM", // [0]
            task: "", // [1]
        },
        {
            hour: "11AM", // [0]
            task: "", // [1]
        },
        {
            hour: "12PM", // [0]
            task: "", // [1]
        },
        {
            hour: "1PM", // [0]
            task: "", // [1]
        },
        {
            hour: "2PM", // [0]
            task: "", // [1]
        },
        {
            hour: "3PM", // [0]
            task: "", // [1]
        },
        {
            hour: "4PM", // [0]
            task: "", // [1]
        },
        {
            hour: "5PM", // [0]
            task: "", // [1]
        },
    ];

    $("#currentDay").text(today.format("[Today is:] dddd[,] MMMM D"));
});