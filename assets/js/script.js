$( document ).ready(function() {

    // Loads the dayJS advanced format plugin.
    dayjs.extend(window.dayjs_plugin_advancedFormat)

    // Global Variables
    var today = dayjs();
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
    $("#currentDay").text(today.format("[Today is:] dddd[,] MMMM Do")); // Getting currentDay element and displaying Day, Month and Date.
    
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
            timeblockRow.append(userTask); // Appending userTask textarea to the timeblockRow div.
            
            var saveTask = $("<button>"); // Setting a variable to create a button.
            saveTask.addClass("saveBtn col-1"); // Giving each save button the class 'saveBtn' and 'col-1'.
            timeblockRow.append(saveTask); // Appending saveTask button to the timeblockRow div.

            $(".container").append(timeblockRow); // Appending each timeblockRow div to the timeblocks container.

        };
    }
    dailyTimeblocks(workingDayHours);

});