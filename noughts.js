var cont = document.getElementById("container");
var btn = document.getElementById("btn");
var boxes = document.getElementsByClassName("box");
var count = 0;
var comb = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
//different combinations to win
var arrO = [];
var arrX = [];

function winner() {
  for (var i = 0; i < comb.length; i++) {
    if (comb[i].every(function(e) {
        return arrX.indexOf(e) !== -1;
      })) //check if all elements of comb[i] are found in arrX 
    {
      alert("Winner: X");
      reset();
    } else if (comb[i].every(function(e) {
        return arrO.indexOf(e) !== -1;  // return the value from the array arr0, if it exists 
      })) {
      alert("Winner: O");
      reset();
    }
  }
} //end of winner check function


// filling the table with symbols by the users

cont.addEventListener("click", function(e) {      // add an event listener to the container element, respond to a click by the user
  var target = e.target || e.srcElement;    // e.target refers to the clicked element
    
    if (target.getAttribute("class") && target.getAttribute("clicked")) {
        alert("This square is filled! Choose another!");        
    }

  if (target.getAttribute("class") && !target.getAttribute("clicked")) {  // display the value of the class attribute of the target element

    if (!(count % 2)) {                                         // checking for even numbers, returns true, 0 has no remainder of 2
      count += 1;
      target.innerHTML = "X";
      target.setAttribute("clicked", "x");   // adds the specified attribute to an element, and gives it the specified value
      arrX.push(Number(target.getAttribute("numb"))); //gotta use Number here since getAttribute returns a string, will return numbers    
    } 
      else {                                                // checking for odd numbers
      count += 1;
      target.innerHTML = "O";
      target.setAttribute("clicked", "o");
      arrO.push(Number(target.getAttribute("numb")));   // filling the array arrO with elements, from 1 to 9
    }
   
   setTimeout(function()   {        
      winner();
    if (count === 9) {        // if the entire table is filled with the symbols, send an alert
      alert("Tie! Reset Game!");
      reset();
    } //reset if no one is the winner when all boxes are filled    
   },10)
}    
}); //end of eventlistener for boxes

function reset() {

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].removeAttribute("clicked");
    arrX = [];
    arrO = [];
    count = 0;
  }
} //end of function for resetting the boxes

btn.addEventListener("click", function() {
  reset();
}); //end of eventlistener to reset boxes