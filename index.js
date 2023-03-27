var score1=0;
var score2=0;
//dice1 image
function rollDice(){
    var randomNumber=Math.floor(Math.random()*6)+1;
    var randomDiceImage="dice"+randomNumber+".png";//eg:dice3.png,dice4.png.....etc
    var randomSoure="images/"+randomDiceImage;//eg:images/dice1.png.......etc
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomSoure);

//dice2 image
    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomDiceImage2="dice"+randomNumber2+".png";
    var randomSource2="images/"+randomDiceImage2;
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomSource2);

//changing the heading
    if(randomNumber>randomNumber2){
        score1++;
        document.querySelector("#score1").textContent=score1;
        const heading = document.querySelector("h2");
        heading.innerHTML = " PLAYER 1 WINS";
        heading.style.color = "red";
    }
    else if(randomNumber===randomNumber2){
        const heading = document.querySelector("h2")
        heading.innerHTML="!! TRY AGAIN !!";
        heading.style.color = "red";

    }
    else{
        score2++;
        document.querySelector("#score2").textContent = score2;
        const heading = document.querySelector("h2");
        heading.innerHTML = "PLAYER 2 WINS ";
        heading.style.color = "red";
    }
}
function reset(){
    score1 = 0;
    score2 = 0;
    document.querySelector("#score1").textContent = score1;
    document.querySelector("#score2").textContent = score2;
    const heading = document.querySelector("h2");
    heading.innerHTML = "Click the button to roll the dice";
    heading.style.color = "black";
}
