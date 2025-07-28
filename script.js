let firstcard = 20
let secondcard = 1
let sum = firstcard + secondcard
let hasBlackJack = false;



// console.log(sum)
// console.log("global scope", hasBlackJack)


 if (sum > 21){
    console.log("You are out of the game")

 }

 else if (sum === 21 ){
    console.log("You won blackjack")
    hasBlackJack = true;
    

 }

 else {
    console.log("You can get a new card")

 }

