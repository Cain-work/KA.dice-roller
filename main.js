
const userInput = document.querySelector("#number-of-dice")
const total = document.querySelector("#total")
const rollButton = document.querySelector("#rollbutton")
const showRolls = document.querySelector("#show-rolls")
let dieNumbers = document.querySelector("#die-numbers")
let dieRolls = []


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
      let sumNumbers = dieRolls.reduce(function(a, b) {
        return a + b;
      })
total.innerHTML = ("Total of rolls:" + sumNumbers)
  } )

  showRolls.addEventListener ("click", function() {

    
    let numbers = dieRolls
    for (const numbers of dieRolls) {
     console.log (numbers)
    dieNumbers.innerHTML += '<li id="die-numbers">' + (numbers) + '</li>' 
    }

   } )



