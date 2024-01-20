$( document ).ready(function() {

    // Global Variables
    var today = dayjs();
    var timeblocksCtn = document.getElementsByClassName(".container"); // Getting the timeblocks container.
    var workingDayHours = [ // Array of objects holding the timeblock hours.
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
    
    // Timeblocks
    function dailyTimeblocks (hours) { // Function to display the timeblocks (Passed in workingDayHours array --> hours).
        for (var i = 0; i < hours.length; i++) { // Iterate through the array.

            var hourSlot = $("<div>"); // Setting a variable to create a div.
            hourSlot.addClass("hour"); // Giving each hourSlot div the class 'hour'.
            hourSlot.text(hours[i].hour); // Giving each hourSlot div an hour from an object in the workingDayHours array.
            $(".container").append(hourSlot); // Appending each hourSlot div to the timeblocks container.
        
        };
    }
    dailyTimeblocks(workingDayHours);


});