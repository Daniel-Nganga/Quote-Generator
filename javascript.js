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
