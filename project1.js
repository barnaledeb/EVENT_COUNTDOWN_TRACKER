const eventNameInput = document.getElementById("eventName");
const eventDateInput = document.getElementById("eventDate");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");


calculateBtn.addEventListener("click", function () {
  // / Get input values
  // console.log("1",eventNameInput.value)
  const eventName = eventNameInput.value.trim();
  const eventDate = eventDateInput.value;

  // Validate inputs
  if (!eventName) {
    resultDiv.textContent = "Please enter a valid event name.";
    return;
  }
// console.log("testing")
  if (!eventDate) {
    resultDiv.textContent = "Please select a valid date.";
    return;
  }
  const currentDate = new Date();
  const targetDate = new Date(eventDate);
  // console.log(targetDate,currentDate)
  if (targetDate  < currentDate ) {
    resultDiv.textContent = "The event date must be in the future";
    return;
  } 
  // else {
  //   resultDiv.textContent = "";
  // }
  const timeDifference = targetDate - currentDate;
  //   if(timeDifference){
  //   resultDiv.textContent = `Days left ${timeDifference}`;
  //   constDaysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
  //   }
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
  const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Remaining hours
  const formattedDate = targetDate.toLocaleDateString("en-IS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  resultDiv.innerHTML = `
    <p>Event Name: <strong>${eventName}</strong></p>
    <p>Event Date: <strong>${formattedDate}</strong></p>
    <p> Days & Time Left: <strong>${daysLeft} days and ${hoursLeft} hours</strong></p>
  `;

})