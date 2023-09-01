let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");

let cardsNumber = 16;
let colors = ["orange","black","yellow","blue","red","green","blueviolet","yellowgreen"];
let fullColors = [...colors,...colors];
let attemptCounter = 0;
let corect = 0;
let clickedCards = [];

document.body.addEventListener("load",createCards());
let resetBtn = document.querySelector(".btn");
resetBtn.addEventListener("click",reset);


function revealCards(){ 
   let cards = document.querySelectorAll(".cards").forEach((card)=>{
    card.addEventListener("click",(event)=>{
      let card = event.target;
      if(clickedCards.length < 2){
        card.style.backgroundColor = card.dataset.color 
        clickedCards.push(card);
        if(clickedCards.length > 1 && clickedCards[0].dataset.color === clickedCards[1].dataset.color){
          clickedCards.forEach((card)=>{
            card.style.backgroundColor = card.dataset.color
            corect++;
            checkWin()

          })
        }else{
          if(clickedCards.length<2){
            card.style.backgroundColor = card.dataset.color
          }else{
            setTimeout(()=>{
              clickedCards.forEach((card)=>{
                card.style.backgroundColor = "grey";
              })
            },1000)
          }
        }
      }else{
        clickedCards = [];   
        card.style.backgroundColor = card.dataset.color 
        clickedCards.push(card);
        if(clickedCards[1] && clickedCards[0].dataset.color === clickedCards[1].dataset.color){
          clickedCards.forEach((card)=>{
            card.style.backgroundColor = card.dataset.color
            corect++;
            checkWin()
          })
        }else{
          if(clickedCards.length<2){
            card.style.backgroundColor = card.dataset.color
          }else{
            setTimeout(()=>{
              clickedCards.forEach((card)=>{
                card.style.backgroundColor = "grey"
              })
            },1000)
          }
        }
      }
      attemptCounter++
      attempts.innerText = `Attempts number: ${Math.floor(attemptCounter/2)}`;
    })
    
   })
   let attempts = document.createElement("p");
   attempts.classList.add("attempts");
   attempts.innerText = `Attempts number: ${attemptCounter}`;
   wrapper.appendChild(attempts);
  }
revealCards()

function createCards(){
    for(let i=0;i<16;i++){
      let div = document.createElement("div");
      div.classList.add("cards");
        container.appendChild(div);
        let randomIndex = Math.floor(Math.random()*fullColors.length);
        div.style.backgroundColor = "grey";
        div.setAttribute("data-color",fullColors[randomIndex]);
        fullColors.splice(randomIndex,1);
    }
    let btn = document.createElement("btn");
    btn.classList.add("btn")
    btn.innerText = "Reset game";
    wrapper.appendChild(btn);
    // container.insertAdjacentElement("beforeend",btn);
};

function reset (){
  let cards = document.querySelectorAll(".cards").forEach((card)=>{
    card.style.backgroundColor = "grey";
    clickedCards = [];
    corect = 0;
    attemptCounter = 0;
    let attempts = document.querySelector(".attempts");
    attempts.textContent = `Attempts number: ${attemptCounter}`;
  })
}

function checkWin(){
  if(corect === 16){
    alert("You win!");
    reset();
  }
} 
console.log("goran");






