let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];
document.addEventListener("keypress", function() {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelup();
  }

});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function() {
    btn.classList.remove("userFlash");
  }, 250);
}
function levelup() {
  userSeq=[];
  level++;
  h2.innerText = `level ${level}`;
  let randomidx = Math.floor(Math.random() * 3);
  let randcolor = btns[randomidx];
  let randbtn = document.querySelector(`.${randcolor}`);
  // console.log(randomidx);
  //  console.log(randcolor);
  //  console.log(randbtn);
  gameSeq.push(randcolor);
  console.log(gameSeq)
  gameFlash(randbtn);
}
function checkAns(idx){
  console.log("usersqe",userSeq);
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelup,1000);
    }
  }
  else{
  h2.innerHTML=`Game Over! Your score was <b>${level}</b> Press Any Key To Start!!`;
  reset();
  }
}
function btnPress(){
  // console.log(this)
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
  btn.addEventListener("click",btnPress);
}
function reset(){
  started=false;
  gameSeq= [];
  userSeq= [];
  level=0;
}