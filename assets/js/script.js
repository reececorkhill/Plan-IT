$( document ).ready(function() {

    // Loading dayJS advanced format plugin.
    dayjs.extend(window.dayjs_plugin_advancedFormat)

    // Setting Global Variables
    var today = dayjs();                                                                            // Variable for today which uses dayJS to get current day.
    var currentHour = dayjs();                                                                      // Variable for current hour which uses dayJS to get current hour.
    var workingDayHours = [                                                                         // Array of objects holding the timeblock hours.
        {
            hourInt: 9, // [0]
            hour: "9AM", // [1]
        },
        {
            hourInt: 10, // [0]
            hour: "10AM", // [1]
        },
        {
            hourInt: 11, // [0]
            hour: "11AM", // [1]
        },
        {
            hourInt: 12, // [0]
            hour: "12PM", // [1]
        },
        {
            hourInt: 13, // [0]
            hour: "1PM", // [1]
        },
        {
            hourInt: 14, // [0]
            hour: "2PM", // [1]
        },
        {
            hourInt: 15, // [0]
            hour: "3PM", // [1]
        },
        {
            hourInt: 16, // [0]
            hour: "4PM", // [1]
        },
        {
            hourInt: 17, // [0]
            hour: "5PM", // [1]
        },
    ];
    var hourDisplayPara = $("<p>");                                                                 // Declaring a variable which will create a <p> element.
    hourDisplayPara.addClass("currentHour");                                                        // Adding the class "currentHour" to the <p> element.
    $("header").append(hourDisplayPara);                                                            // Appending the <p> element to the header.

    // Displaying Date
    var hourDisplayPara = $("<p>");                                                                 // Setting a variable to create a paragraph element.
    $("#currentDay").text(today.format("[Today is:] dddd[,] MMMM Do"));                             // Getting currentDay element and displaying Day, Month and Date.
    $(".currentHour").text(currentHour.format("[Current hour:] HH[:00]"));                          // Getting currentHour and displaying it as 2-digits with formatting in the currentHour <p> element.
    
    // Timeblocks
    function dailyTimeblocks (hours) {                                                              // Function to display the timeblocks (Passed in workingDayHours array --> hours).
        var tasksList = JSON.parse(localStorage.getItem("userTasks"));                              // Get key "userTasks" from localstorage and parse it to the variable - tasksList.
        
        if (!tasksList) {                                                                           // Checking if the taskList is falsy or not defined.
            tasksList = [];                                                                         // If it is falsy or not defined, initialise it as an empty array.
            for (var i = 9; i <= 17; i++) {                                                         // Iterating from 9 to 17.
                tasksList.push({taskTime: i, taskText: ""})                                         // Each iteratin pushes an object with taskTime set to current index and taskText set to an empty string.
            };
            localStorage.setItem("userTasks", JSON.stringify(tasksList));                           // Stores the tasksList in localstorage as a string.
        };

        for (var i = 0; i < hours.length; i++) {                                                    // Iterate through the array.

            var timeblockRow = $("<div>");                                                          // Setting a variable to create a div.
            timeblockRow.addClass("row");                                                           // Giving each timeblockRow div the class 'row'.

            var hourSlot = $("<div>");                                                              // Setting a variable to create a div.
            hourSlot.addClass("hour col-1");                                                        // Giving each hourSlot div the class 'hour' and 'col-1'.
            hourSlot.text(hours[i].hour);                                                           // Giving each hourSlot div an hour from an object in the workingDayHours array.
            timeblockRow.append(hourSlot);                                                          // Appending each hourSlot div to the timeblockRow div.

            var userTask = $("<textarea>");                                                         // Setting a variable to create a textarea.
            userTask.addClass("description col");                                                   // Giving each userTask textarea the class 'description' and 'col'.
            userTask.attr("data-index", hours[i].hourInt);                                          // Giving each textatea the attribute 'data-index' and the value of the current indexes hourInt.
            userTask.text(tasksList[i].taskText);                                                   // Set text content of userTask textarea to the taskText from the corresponding index in tasksList
            timeblockRow.append(userTask);                                                          // Appending userTask textarea to the timeblockRow div.
            
            var saveTask = $("<button><i>");                                                        // Setting a variable to create a button with icon.
            saveTask.addClass("saveBtn col-1 fas fa-save fa-2x");                                   // Giving each save button the class 'saveBtn' and 'col-1' and fontawesome classes for the icon.
            saveTask.css("color:#ffffff");                                                          // Adding the color white to the icon.
            timeblockRow.append(saveTask);                                                          // Appending saveTask button to the timeblockRow div.

            $(".container").append(timeblockRow);                                                   // Appending each timeblockRow div to the timeblocks container.
        };
    }
    dailyTimeblocks(workingDayHours);                                                               // Calling the dailyTimeblocks function.

    function presentHour () {                                                                       // Function to change the class of a timeblockRow's textarea based on the hour matching the current time.
        var currentHourNumber = currentHour.format("HH");                                           // Gets the hour as 2-digit format.
        var currentHourInt = parseInt(currentHourNumber);                                           // Parsing the currentHourNumber as an integer and setting it as the currentHourInt variable.

        for (var i = 0; i < workingDayHours.length; i++) {                                          // Iterate through the array.
            if (workingDayHours[i].hourInt === currentHourInt) {                                    // Checking if the current workingDayHours index hourInt number is strictly equal to the current hour.
                var matchingUserTask = $("[data-index='" + workingDayHours[i].hourInt + "']");      // Selecting the userTask textarea with the matching data-index.
                matchingUserTask.addClass("present");                                               // Add the "present" class to the matching textarea.
            };
        };
    }
    presentHour();                                                                                  // Calling the presentHour function.

    function pastHour () {                                                                          // Function to change the class of a timeblockRow's textarea based on the hour being lower than the current time.
        var currentHourNumber = currentHour.format("HH");                                           // Gets the hour as 2-digit format.
        var currentHourInt = parseInt(currentHourNumber);                                           // Parsing the currentHourNumber as an integer and setting it as the currentHourInt variable.

        for (var i = 0; i < workingDayHours.length; i++) {                                          // Iterate through the array.
            if (workingDayHours[i].hourInt < currentHourInt) {                                      // Checking if the current workingDayHours index hourInt number is less than the current hour.
                var matchingUserTask = $("[data-index='" + workingDayHours[i].hourInt + "']");      // Select the userTask textarea with the matching data-index.
                matchingUserTask.addClass("past");                                                  // Add the "past" class to the matching textarea.
            };
        };
    }
    pastHour();                                                                                     // Calling the pastHour function.

    function futureHour () {                                                                        // Function to change the class of a timeblockRow's textarea based on the hour being greater than the current time.
        var currentHourNumber = currentHour.format("HH");                                           // Gets the hour as 2-digit format.
        var currentHourInt = parseInt(currentHourNumber);                                           // Parsing the currentHourNumber as an integer and setting it as the currentHourInt variable.

        for (var i = 0; i < workingDayHours.length; i++) {                                          // Iterate through the array.
            if (workingDayHours[i].hourInt > currentHourInt) {                                      // Checking if the current workingDayHours index hourInt number is greater than the current hour.
                var matchingUserTask = $("[data-index='" + workingDayHours[i].hourInt + "']");      // Select the userTask textarea with the matching data-index.
                matchingUserTask.addClass("future");                                                // Add the "future" class to the matching textarea.
            };
        };
    }
    futureHour();                                                                                   // Calling the futureHour function.

    function saveTaskEntry() {                                                                      // Function to save the users task to local storage.
        var clickedButton = $(this);                                                                // The clicked saveBtn.
        var correspondingTextarea = clickedButton.closest(".row").find("textarea");                 // Finding the textarea in the same row as the clicked button.
        var existingUserTasks = JSON.parse(localStorage.getItem("userTasks"));                      // Declaring a new variable which gets userTasks from localstorage and parses it.
        var hourIntIndex = correspondingTextarea.data("index");                                     // Gets value of the 'data-index' from correspondingTextarea.

        if (correspondingTextarea.val().trim() !== "") {                                            // Checking that the user has entered something in the textarea of the corresponding button, removes whitespace.
            var taskText = correspondingTextarea.val();                                             // Declaring a new variable which gets the value of the textarea.
            var taskTime = hourIntIndex;                                                            // Declaring a new variable which gets the text inside of the time div.
            var taskListItems = {taskTime, taskText};                                               // Declaring a new variable which holds the taskTime and taskText in an object.
        } else {                                                                                    // If the user has not entered anything in the textarea of the corresponding button.
            alert("This task is empty, please enter a task and try again!");                        // Alert to advise the user they must enter something in the text area to save.
            return;
        };

        if (!existingUserTasks) {                                                                   // If existingUserTasks is falsy.
            existingUserTasks = [];                                                                 // Set existingUserTasks to an empty array.
        };

        for (var i = 0; i < existingUserTasks.length; i++) {                                        // Iterate through the existingUserTasks array.
            if (existingUserTasks[i].taskTime === hourIntIndex) {                                   // Checking if the taskTime property of current index is strictly equal to the hourIntIndex.
                existingUserTasks.splice(i, 1);                                                     // If taskTime matches, remove the element at current index.                                                   
            };
        };

        var newTasks = [...existingUserTasks, taskListItems];                                       // Creates newTasks array by spreading the elements of existingUserTasks and adding taskListItems to the end.
        newTasks.sort((a, b) => a.taskTime-b.taskTime);                                             // Sorts array of objects in newTasks based on the taskTime property in ascending order.
        localStorage.setItem("userTasks", JSON.stringify(newTasks));                                // Converts newTasks to a string and stores it in local storage with the key "userTasks".
    }
    $(".saveBtn").click(saveTaskEntry);                                                             // Calling the saveTaskEntry function when a save button is clicked.
});