
const userInput = document.querySelector("#number-of-dice")
const total = document.querySelector("#total")
const rollButton = document.querySelector("#rollbutton")
const showRolls = document.querySelector("#show-rolls")
let dieRolls = 
//const dieRolls = '<li id= "rolls">' + rolls + "</li>" //

rollButton.addEventListener("click", function()  {

    let numberDice = userInput.value 
   
console.log (numberDice)

total.innerHTML = ("Total of rolls:" + numberDice)
  }

) 


let rolls = userInput
while (rolls <= userInput) {
  
  Math.floor (Math.random() * 7) 

  rolls ++
  console.log (rolls)

}