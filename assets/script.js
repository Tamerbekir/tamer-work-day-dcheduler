// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const timeDisplay = $('#currentDay');
const saveAppt = $(".saveBtn")
let timeBlock = $(".time-block")

function displayTime() {
  let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplay.text(rightNow);
}

//! Might use reminder for the end
// function saveReminder() {
// alert("Your schedule has been saved")
// }

//! GETTING AND SETTING SCHEDULE TO STORAGE

$(saveAppt).on('click', function () {
  //! THIS = saveAppt function
  let descriptionValue = $(this).siblings('.scheduleText').val();
  let hourValue = $(this).parent().attr('id');
  localStorage.setItem(hourValue, descriptionValue);
  console.log(hourValue, descriptionValue)
  // saveReminder()
});
for (let i = 0; i <= 9; i++) {
  $(`#hour${i} .scheduleText`).val(localStorage.getItem(`hour${i}`));
}


// const today = dayjs().startOf('day');
// let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');


//! PAST, FUTURE AND PRESENT ATTRIBUTES TO SCHEDULE

//! create variable for  time
//! if statements for past, present and future
//? append class to page?

function scheduleAttributes() {
  $.each(timeBlock, function() {
    let currentHour = dayjs().hour();
    let scheduledTime = parseInt($(this).attr('id').split("hour")[1]);

    // if schedule made is BEFORE the current hour
    if (scheduledTime < currentHour) {
      $(this).addClass('past');
    } else if (scheduledTime === currentHour) {
      // if schedule made WITHIN the current hour
      $(this).addClass('present');
      $(this).removeClass('past');
    } else if (scheduledTime > currentHour) {
      // if schedule made AFTER the current hour
      $(this).removeClass('past');
      $(this).addClass('future');
    }
  });
}

//! For Loop for storage not working. If not, use this
// $('#hour9, .scheduleText').val(localStorage.getItem('hour9'));
// $('#hour10 .scheduleText').val(localStorage.getItem('hour10'));
// $('#hour11 .scheduleText').val(localStorage.getItem('hour11'));
// $('#hour12 .scheduleText').val(localStorage.getItem('hour12'));
// $('#hour1 .scheduleText').val(localStorage.getItem('hour1'));
// $('#hour2 .scheduleText').val(localStorage.getItem('hour2'));
// $('#hour3 .scheduleText').val(localStorage.getItem('hour3'));
// $('#hour4 .scheduleText').val(localStorage.getItem('hour4'));
// $('#hour5 .scheduleText').val(localStorage.getItem('hour5'));




scheduleAttributes()
displayTime()
setInterval(displayTime, 1000);


// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 

// HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.

// HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. ✅


// HINT: How can the id attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page ✅

