let wrapper = document.querySelector(".wrapper");
let container = document.createElement("div")
container.classList.add("container")
wrapper.appendChild(container);

let cardsNumber = 16;
let attemptCounter = 0;
let corect = 0;
let clickedCards = [];

document.body.addEventListener("load",createCards());

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
      let attempts = document.querySelector(".attempts");
      attempts.innerText = `Attempts number: ${Math.floor(attemptCounter/2)}`;
    })
    
   })
  }
revealCards()

function createCards(){
  let colors = ["orange","black","yellow","blue","red","green","blueviolet","yellowgreen"];
let fullColors = [...colors,...colors];
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
    let resetBtn = document.querySelector(".btn");
resetBtn.addEventListener("click",reset);

    let attempts = document.createElement("p");
   attempts.classList.add("attempts");
   attempts.innerText = `Attempts number: ${attemptCounter}`;
   wrapper.appendChild(attempts);
};

function reset (){
  for(let i =0;i<16;i++){
    container.removeChild(container.children[0])
  }
  wrapper.removeChild(wrapper.children[2])
    wrapper.removeChild(wrapper.children[2])

    clickedCards = [];
    corect = 0;
    attemptCounter = 0;
    activeCards = 0;

  createCards()
  revealCards()

}

function checkWin(){
  if(corect === 16){
    alert("You win!");
    reset();
  }
} 






