let firstcard = getRandomCard()
let secondcard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false;
let isALive = true
let message =""
let messagebox = document.getElementById("message-el")
let sumbox = document.getElementById("sum-el")
let cardbox = document.getElementById("cards-el")


// console.log(sum)
// console.log("global scope", hasBlackJack)


function startGame(){
    isALive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame();
}

function getRandomCard(){
    let randomCardNumber = Math.floor(Math.random()*13)+1
    // return randomCardNumber
    if (randomCardNumber === 1){
        return 11
    }


    else if (randomCardNumber > 10){
        return 10
    }

    else {
        return randomCardNumber
    }
}


function renderGame(){
    cardbox.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++){
        cardbox.textContent += cards[i] + " ";
    }


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
sumbox.textContent ="Sum: " +sum
// cardbox.textContent ="Cards: " + cards[0] +" "+ cards[1]

}


function newCard(){





    if (hasBlackJack === false && isALive === true){
        let card = getRandomCard()
    // sum = sum +card
    sum+=card
    cards.push (card)
 renderGame()
    }

}
