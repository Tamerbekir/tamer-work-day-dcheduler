// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const timeDisplay = $('#currentDay');
const saveAppt = $(".saveBtn")

// let currentHour = dayjs().hour()
let timeBlock = $(".time-block")
let twentyFourHour = dayjs().format("H");

function displayTime() {
  let rightNow = dayjs().format('MMM DD, YYYY');
  timeDisplay.text(rightNow);
} 


//! GETTING AND SETTING SCHEDULE TO STORAGE
$(saveAppt).on('click', function () {
  // THIS = saveAppt function
  let descriptionValue = $(this).siblings('.scheduleText').val();
  let hourValue = $(this).parent().attr('id');
  localStorage.setItem(hourValue, descriptionValue);
  console.log(hourValue, descriptionValue)
});

//for Loop saves all entry to local storage, 12 being the highest number
for (let i = 0; i <= 12; i++) {
  $(`#hour${i} .scheduleText`).val(localStorage.getItem(`hour${i}`));
}


//! PAST, FUTURE AND PRESENT ATTRIBUTES TO SCHEDULE.
function scheduleAttributes() {
  let twentyFourHour = parseInt(dayjs().format("H"));

  $(timeBlock).each(function () {
    let scheduledPlanner = parseInt($(this).attr("id").split("-")[1]);
    console.log(scheduledPlanner, twentyFourHour);

    // Apply classes when comapring scheduledPlanner and twentyFourHour
    if (scheduledPlanner < twentyFourHour) {
      // If before current time, apply class
      $(this).addClass("past").removeClass("future present");
    } else if (scheduledPlanner === twentyFourHour) {
      // If within current time, apply class
      $(this).addClass("present").removeClass("past future");
    } else {
      // Otherwise, all time is in the future, apply class
      $(this).addClass("future").removeClass("past present");
    }
  });
}

scheduleAttributes()
displayTime()
setInterval(displayTime, 1000);


