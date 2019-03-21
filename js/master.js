var myButton = document.querySelector("#my-button");
// can only use this getElementById if item has an id
var toHereButton = document.querySelector("#to-here-button");
var myButtonClickCounter = 0;
var toHereButtonClickCounter = 0;

var myButtonLegend = document.querySelector("#my-button-legend");
myButtonLegend.innerHTML = "This button has been clicked " + myButtonClickCounter + " times.";

var toHereButtonLegend = document.querySelector("#to-here-button-legend");
toHereButtonLegend.innerHTML = "This button has been clicked " + toHereButtonClickCounter + " times.";

// objects for up & down arrows, and text field
var counterOutput = document.querySelector("#displayCounter");
var upArrow = document.querySelector(".up-arrow-square");
var downArrow = document.querySelector(".down-arrow-square");
var arrowClickCounter = 0;

// RESET Buttons
var resetClickMe = document.querySelector("#myButton-reset");
resetClickMe.style.visibility= "hidden";


// ****************** FUNCTIONS *********************
function updateLegendLabel(obj, num){
  //var times = num === 1 ? " time." : " times."
  var maxClicks = 10;
  var times = " times.";

  if(num === 1) {
    times = " time.";
  }

  var message = "This button has been clicked " + num + times;

  if(num > maxClicks)
  {
    message = "STOP CLICKING!";
    displayReset();
  }

  obj.innerHTML = message;
}

// for arrow buttons
function updateDisplayCounter(obj, num){
  counterOutput.value = num;
  console.log(num);
}

// reset buttons
// -hide button upon load, display when counter hits 10
// and Stop Clicking message is displayed
// then reset counter to 0 inside event listener when reset is clicked
function displayReset() {
  resetClickMe.style.visibility = "visible";
  //console.log(resetClickMe);
}
// ****************** END FUNCTIONS *********************


updateLegendLabel(myButtonLegend, myButtonClickCounter);
updateLegendLabel(toHereButtonLegend, toHereButtonClickCounter);

// Event listener for first button click
myButton.addEventListener("click", function(){
  // record number of clicks
  myButtonClickCounter++;
  updateLegendLabel(myButtonLegend, myButtonClickCounter);
})

toHereButton.addEventListener("click", function(){
  // record number of clicks
  toHereButtonClickCounter++;
  updateLegendLabel(toHereButtonLegend, toHereButtonClickCounter);
})

// myButton.addEventListener("mouseover", function(){
//   alert("Don't click that!");
// })

// for reset button (next to Click Me!)
resetClickMe.addEventListener("click", function() {
  myButtonClickCounter = 0;
  updateLegendLabel(myButtonLegend, myButtonClickCounter);
  resetClickMe.style.visibility = "hidden";
})

// *********** up and down arrow ********************

// If up arrow is clicked, increment arrowClickCounter by 1
upArrow.addEventListener("click", function() {
  arrowClickCounter++;
  updateDisplayCounter(upArrow, arrowClickCounter);
})


// If up arrow is clicked, decrement arrowClickCounter by 1
downArrow.addEventListener("click", function(){
  if(arrowClickCounter >= 0){
    updateDisplayCounter(downArrow, arrowClickCounter);
    arrowClickCounter--;
  }
  else {
    counterOutput.value = "Arrow up."
  }
})
