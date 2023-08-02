let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;   //ek variable bnaya ,jiski valuse false hi mtlb game start nhi hai abhi
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {      //document ke upr hi addeventlistener lagaya taki jb keypress event ho to game start ho jaye.
    if(started == false) {                              //yha humne ek loop lga diya jisse game ek hi baar start hoga baar baar nhi , koi bhi keyboard key ko press krne se game start ho jayega firr doori key kam nhi kregi
        console.log("game is started");
        started = true;

        levelUp();
    }
});                                                       // yha humhara 1st step complete ho gya 


function gameFlash(btn) {                              //btn flash krne ke liye sbse pehle classList add liya flash vali class ko, jaise hi class add ho gai uska background colur white ho jayega,
    btn.classList.add("flash");                       // fir 1sec baad settimeout function ki help se flash ko remove krva dege , iss treeke se humahara btn flash ho jayega .
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}


function userflash(btn) {                              
    btn.classList.add("userflash");                       
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level${level}`;                       


    let randIdx = Math.floor(Math.random() * 3);                                                             //random btn choose
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
   
    gameFlash(randBtn);
} 


function checkAns(idx) {
    // console.log("current level : ", level);
   

    if (userSeq[idx] === gameSeq[idx]) {
       if (userSeq.length == gameSeq.length) {
       setTimeout(levelUp, 1000);
       }
    } else {
        h2.innerHTML = `game over ! Your Score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
    
}

function btnPress() {
   let btn = this;
   userflash(btn);
  

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}