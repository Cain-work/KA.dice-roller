
const userInput = document.querySelector("#number-of-dice")
const total = document.querySelector("#total")
const rollButton = document.querySelector("#rollbutton")
const showRolls = document.querySelector("#show-rolls")
let dieNumbers = document.querySelector("#die-numbers")
let dieRolls = []

//const dieNumbers = '<li id= "rolls">' + rolls + "</li>" //

rollButton.addEventListener ("click", function() {
     
    let numberDice = userInput.value 
    let rolls = 0
    
    while (rolls <= numberDice - 1) {  
      
      getNumbers = Math.floor(Math.random() * 6 +1);
      dieRolls.push (getNumbers)
      rolls ++

      console.log (getNumbers)
      console.log (dieRolls)
      
    }  
    console.log (numberDice)

total.innerHTML = ("Total of rolls:" + dieRolls.values())
  } )

  showRolls.addEventListener ("click", function() {

    
    const numbers = dieRolls
    for (const numbers of dieRolls) {
     console.log (numbers)
    dieNumbers.innerHTML = '<li id="die-numbers">' + (numbers) + '</li>' 
    }

   } )



