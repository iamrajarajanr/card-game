let firstcard = 20
let secondcard = 1
let sum = firstcard + secondcard
let hasBlackJack = false;
let isALive = true
let message =""
let messagebox = document.getElementById("message-el")


// console.log(sum)
// console.log("global scope", hasBlackJack)


 if (sum > 21){
    message = "You are out of the game"
console.log(message)
    isALive=false


}

 else if (sum === 21 ){
    message="You won blackjack"
    hasBlackJack = true;
    console.log(message)
}

 else {
    message="You can get a new card"
    console.log(message)
}

messagebox.textContent = message

