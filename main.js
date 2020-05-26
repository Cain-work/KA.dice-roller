
const userInput = document.querySelector("#number-of-dice")
const total = document.querySelector("#total")
const rollButton = document.querySelector("#rollbutton")
const showRolls = document.querySelector("#show-rolls")
let dieRolls = []
//const dieRolls = '<li id= "rolls">' + rolls + "</li>" //

rollButton.addEventListener ("click", function() {
     
    let numberDice = userInput.value 
    let rolls = 0
    
    while (rolls <= numberDice - 1) {  
      
      getNumbers = Math.floor(Math.random() * 6 +1);
      console.log (getNumbers)
      dieRolls.push (getNumbers)
      rolls ++
      console.log (rolls)
      console.log (dieRolls)
      
    }  
console.log (numberDice)

total.innerHTML = ("Total of rolls:" + getNumbers)
  } )




