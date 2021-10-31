
// Restart button
var restart = document.querySelector("#b");
// Grab all the squares
var squares  = document.querySelectorAll("td");
//Clear squares
function clear (){
    for (var i = 0; i < squares.length; i++){
        squares[i].textContent = " ";
    }
}

restart.addEventListener("click", clear);
// Check the sqaure marker
//creating this function is easier to get what's in the squares, alternatively I could assign to every single square an ID, and analizing one by one.
function changeMarker(){
    if (this.textContent === " "){
        this.textContent = "X";
    } else if (this.textContent === "X"){
        this.textContent = "O";
        } else {
            this.textContent = "";
        }
    }
// after creating this function, I actually need to create this loop, to get the X OR O as per function
// For Loop to add event listener to all the squares
for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", changeMarker)
}