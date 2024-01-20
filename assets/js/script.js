$( document ).ready(function() {

    // Global Variables
    var today = dayjs();
    var timeblocksCtn = document.getElementsByClassName(".container"); // Getting the timeblocks container.
    var workingDay = [ // Array of objects holding the timeblock hours.
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

    // Displaying Date
    $("#currentDay").text(today.format("[Today is:] dddd[,] MMMM D")); // Getting currentDay element and displaying Day, Month and Date.

});