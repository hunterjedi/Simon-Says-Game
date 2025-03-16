let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["red", "green", "yellow", "purple"];

let p = document.querySelector("p");
let startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", function(){
    if(started == false){
        // console.log("Game is started now !");
        started = true;
        levelup();
    }else{
        reset();
    }

    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout (function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelup(){
    userseq = [];
    level++;
    p.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    // console.log(gameseq);

    btnFlash(randBtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {

        p.innerText = ` Game Over ! You have Scored : ${(level-1) * 10} Coins. 
        Press start button to start the Game.`;
        document.querySelector('.container').style.backgroundColor = "orange";
        let box = document.querySelector(".box");
        box.classList.add("display");
        reset();
    }
}

function btnPress(){
    let pressbtn = this;
    btnFlash(pressbtn);

   userColore = pressbtn.getAttribute("id");
//    console.log(userColore)
   userseq.push(userColore);

   checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    startBtn.addEventListener("click", function(){
        document.querySelector('.container').style.backgroundColor = "white";
        let box = document.querySelector(".box");
        box.classList.remove("display");
    });
    
}