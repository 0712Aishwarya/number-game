let guess=document.querySelector(".guess");
let checkbuton=document.querySelector(".btn-check");
let msg=document.querySelector(".message");
let score=document.getElementsByClassName("score")[0];
let highscore=document.querySelector(".highscore");
let number=document.querySelector(".number");
let again=document.querySelector(".btn-again");
let scores=20;
let randomNumber=Math.trunc(Math.random()*20)+1;
console.log("random number",randomNumber);
// console.log("guess value",Number(guessvalue));
function checkNumber(){
    let guessvalue=Number(guess.value);
if(guessvalue==randomNumber){
    // console.log("correct number");
    document.querySelector("body").style.backgroundColor="green";
    msg.textContent="Correct Number";
    highscore.textContent=scores;
    number.textContent=randomNumber;

}
else if(guessvalue<randomNumber){
    if(scores>0){

        msg.textContent="too low!!";
        scores--;
        score.textContent=scores;
    }
    else{
        msg.textContent="You have lost the game";
        document.querySelector("body").style.backgroundColor="red";
        // score.textContent=scores;
    }


}
else{
    if(scores>0){

        msg.textContent="too high!!";
        scores--;
        score.textContent=scores;
    }
    else{
        msg.textContent="You have lost the game";
        document.querySelector("body").style.backgroundColor="red";
        // score.textContent=scores;
    }
}
}
checkbuton.addEventListener("click",checkNumber);
function resetgame(){
    scores=20;
    score.textContent=scores;
    msg.textContent="Start guessing...";
    number.textContent="?";
    document.querySelector("body").style.backgroundColor="#222";
    highscore.textContent=0;
    guess.value="";
    randomNumber=Math.trunc(Math.random()*20)+1;
    console.log("random number",randomNumber);

}
again.addEventListener("click",resetgame);
