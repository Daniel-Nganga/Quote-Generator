<<<<<<< HEAD
let quots = document.getElementById("quote");
let index = 0;
let para = document.createElement("p");
let owner = document.createElement("h2");

let array = [
  "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  "There is always light. If only we’re brave enough to see it. If only we’re brave enough to be it.",
  "Once you face your fear, nothing is ever as hard as you think",
  "You are never too old to set another goal or to dream a new dream.",
  "Who do you spend time with? Criticizers or encouragers? Surround yourself with those who believe in you. Your life is too important for anything less",
  "It is never too late to be what you might have been.",
  "Keep your head and your heart going in the right direction, and you will not have to worry about your feet.",
  "When you discover God’s purpose for your life, you can be conﬁdent and persuaded that you will succeed.",
  "Accept your past without regret, handle your present with confidence and face your future without fear.",
  "No matter how good you are someone is always going to be against you But never let them be the limit of your success",
  "The more you learn the more you earn ",
  "A tree doesn't follow birds. Instead, it creates beautiful flowers and fruits to attract birds",
  "Most people don’t	know how to listen because the major part of their	attention is taken up by thinking",
];
let arrayOwner = [
  "Thomas A. Edison",
  "Amanda Gorman",
  "Olivia Newton-John",
  "Malala Yousafzai",
  "Steve Goodier",
  "George Eliot",
  "Ben Renshaw",
  "Ben Renshaw",
  "Unknown",
  "Terr Mark",
  "Mauka",
  "Mauka",
  "Eckhart Tolle",
];

para.textContent = array[index];
quots.appendChild(para);

owner.textContent = arrayOwner[index];
quots.appendChild(owner);

function quoteckick() {
  if (index === array.length - 1 || index === arrayOwner.length - 1) {
    index = 0;
  }
  index++;

  console.log("Current Index:", index);
  console.log("Current Quote:", array[index]);
  console.log("Current Owner:", arrayOwner[index]);

  para.textContent = array[index];
  quots.appendChild(para);

  owner.textContent = arrayOwner[index];
  quots.appendChild(owner);
}
=======
let quots = document.getElementById("quote");
let index = 0;
let para = document.createElement("p");
let owner = document.createElement("h2");

let array = JSON.parse(localStorage.getItem("quotes"))|| [
 
];
let arrayOwner =JSON.parse(localStorage.getItem("authors"))|| [
  
  
];

quots.appendChild(para);
quots.appendChild(owner);
function saveToLocalStorage(){
  localStorage.setItem("quotes", JSON.stringify(array))
  localStorage.setItem("authors",JSON.stringify(arrayOwner))
}


function displayQuote(){
  if(array.length>0){
    para.textContent=array[index]
    owner.textContent=arrayOwner[index]
  }else{
    para.textContent="No quote Available"
    owner.textContent=""
  }
}

function quoteckick() {
  if (array.length === 0)return ;
   index =(index+1)%array.length

  displayQuote()
  
}

const add_quote_button= document.getElementById("add_quote_button");

let addingQuoteContainer = document.querySelector(".adding_quote-container");
 const adding_quote_buttob= document.getElementById("adding_quote_buttob");
 function showAddQuateContainer(){
  addingQuoteContainer.style.display="flex"

}
 adding_quote_buttob.addEventListener("click", showAddQuateContainer);



//adding quotes fuction
function addQuote(){
  const quote_input= document.getElementById("quote_input").value;
const author_input= document.getElementById("author_input").value;
const messageBox = document.getElementById("message");
  if(quote_input && author_input){
    array.push(quote_input)
    arrayOwner.push(author_input)

    // Save updated arrays to localStorage
    saveToLocalStorage(); // Added this line

    //Clear the input fields after adding
    document.getElementById("quote_input").value="";
    document.getElementById("author_input").value="";

    // Hide the add quote container
    addingQuoteContainer.style.display = "none";
    

    messageBox.innerText = "New quote and author added successfully!";
    messageBox.style.display = "block";
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 1000);
    index = array.length - 1; // Show the latest added quote
    displayQuote();

  } else {
    messageBox.innerText = "Both quote and author fields are required!";
    messageBox.style.background = "red"; // Change background to red for error
    messageBox.style.display = "block";

    setTimeout(() => {
      messageBox.style.display = "none";
      messageBox.style.background = "green"; // Reset background to green
    }, 3000);
   
  }
    
}

displayQuote();
>>>>>>> ad4ca09 (Initial commit~)
