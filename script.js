 //start the game by clicking a button
    //pressing a key is a key event
        //letter showes on page in place it belongs in word
    //timer starts once button is pushed
 //box with game user interfaces with
    //figure out how link keystrokes to page
    //create an array with list of words
    //randomize selection of words
    //word populates on screen as series of blanks then fills in as

//if user guesses all the letters they win if not they lose
    //scoreboard with tally of wins and losses
        //log function as text content

//when a user wins or loses, message appears and timer stops
    //BONUS rest button
    
var words = ["javascript", "style", "html", "index", "stringify", "truthy", "falsey", "boolean", "void"]
var letters = "abcdefghijklmnopqrstuvwxyz"
var wins = 0
var losses = 0
var start = document.querySelector("#start")
var timeLeft
var randomNumber = function () {
Math.floor(Math.random()*words.length)
}
var randomWord = words[randomNumber]

start.addEventListener("click", function(){
    //start game
})

document.addEventListener('keyup', function(event){
    if (randomWord.includes (event.key)){
        //make it appear in blank spaces
    }
    else (alert("wrong letter!"))
})
