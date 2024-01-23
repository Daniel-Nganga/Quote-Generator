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
];
let arrayOwner = [
  "Thomas A. Edison",
  "Amanda Gorman",
  "Olivia Newton-John",
  "Malala Yousafzai",
  "Steve Goodier",
  "George Eliot",
];

para.textContent = array[index];
quots.appendChild(para);

owner.textContent = arrayOwner[index];
quots.appendChild(owner);

function quoteckick() {
  if (index === array.length && index === arrayOwner.length) {
    index = 0;
  }
  index++;
  para.textContent = array[index];
  quots.appendChild(para);

  owner.textContent = arrayOwner[index];
  quots.appendChild(owner);
}
