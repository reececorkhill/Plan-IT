$( document ).ready(function() {

    // Loads the dayJS advanced format plugin.
    dayjs.extend(window.dayjs_plugin_advancedFormat)

    // Global Variables
    var today = dayjs();
    var currentHour = dayjs();
    var workingDayHours = [ // Array of objects holding the timeblock hours.
        {
            hourInt: 9, // [0]
            hour: "9AM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 10, // [0]
            hour: "10AM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 11, // [0]
            hour: "11AM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 12, // [0]
            hour: "12PM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 1, // [0]
            hour: "1PM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 2, // [0]
            hour: "2PM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 3, // [0]
            hour: "3PM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 4, // [0]
            hour: "4PM", // [1]
            task: "", // [2]
        },
        {
            hourInt: 5, // [0]
            hour: "5PM", // [1]
            task: "", // [2]
        },
    ];

    // Displaying Date
    $("#currentDay").text(today.format("[Today is:] dddd[,] MMMM Do")); // Getting currentDay element and displaying Day, Month and Date.
    $("#currentDay").text(currentHour.format("[Time is:] hA")); // Getting currentHour and displaying it as X AM/PM.
    
    // Timeblocks
    function dailyTimeblocks (hours) { // Function to display the timeblocks (Passed in workingDayHours array --> hours).
        for (var i = 0; i < hours.length; i++) { // Iterate through the array.

            var timeblockRow = $("<div>"); // Setting a variable to create a div.
            timeblockRow.addClass("row"); // Giving each timeblockRow div the class 'row'.

            var hourSlot = $("<div>"); // Setting a variable to create a div.
            hourSlot.addClass("hour col-1"); // Giving each hourSlot div the class 'hour' and 'col-1'.
            hourSlot.text(hours[i].hour); // Giving each hourSlot div an hour from an object in the workingDayHours array.
            timeblockRow.append(hourSlot); // Appending each hourSlot div to the timeblockRow div.

            var userTask = $("<textarea>"); // Setting a variable to create a textarea.
            userTask.addClass("description col"); // Giving each userTask textarea the class 'description' and 'col'.
            userTask.attr("data-index", hours[i].hour);
            timeblockRow.append(userTask); // Appending userTask textarea to the timeblockRow div.
            
            var saveTask = $("<button>"); // Setting a variable to create a button.
            saveTask.addClass("saveBtn col-1"); // Giving each save button the class 'saveBtn' and 'col-1'.
            timeblockRow.append(saveTask); // Appending saveTask button to the timeblockRow div.

            $(".container").append(timeblockRow); // Appending each timeblockRow div to the timeblocks container.
        };
    }
    dailyTimeblocks(workingDayHours);

    function presentHour () { // Function to change the class of a timeblockRow's textarea based on the hour matching the current time.
        var currentHourNumber = currentHour.format("h"); // Gets the time (non-ordinal).
        // console.log(typeof(currentHourNumber))
        // console.log(currentHourNumber)
        var currentHourInt = parseInt(currentHourNumber);
        // console.log(typeof(currentHourInt));
        // console.log(currentHourInt)

        for (var i = 0; i < workingDayHours.length; i++) {
            if (workingDayHours[i].hourInt === currentHourInt) {
                // console.log("We have a match!")
                // console.log(workingDayHours[i].hourInt)
                // console.log(currentHourInt)
                var matchingUserTask = $("[data-index='" + workingDayHours[i].hour + "']"); // Select the userTask textarea with the matching data-index.
                matchingUserTask.addClass("present"); // Add the "present" class to the matching textarea.
            };
        };
    }
    presentHour(); 

    function pastHour () { // Function to change the class of a timeblockRow's textarea based on the hour matching the current time.
        var currentHourNumber = currentHour.format("h"); // Gets the time (non-ordinal).
        // console.log(typeof(currentHourNumber))
        // console.log(currentHourNumber)
        var currentHourInt = parseInt(currentHourNumber);
        // console.log(typeof(currentHourInt));
        // console.log(currentHourInt)

        for (var i = 0; i < workingDayHours.length; i++) {
            if (workingDayHours[i].hourInt != currentHourInt) {
                // console.log("We have a match!")
                // console.log(workingDayHours[i].hourInt)
                // console.log(currentHourInt)
                var matchingUserTask = $("[data-index='" + workingDayHours[i].hour + "']"); // Select the userTask textarea with the matching data-index.
                matchingUserTask.addClass("past"); // Add the "present" class to the matching textarea.
            };
        };
    }
    pastHour();
});