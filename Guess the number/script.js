let randomNumber = parseInt(Math.random() * 100 + 1)

//selecting
const submit = document.querySelector('#subt')
const userInput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses')
const startOver = document.querySelector('.resultParas')
const count = document.querySelector('.lastResult')
const lowOrHight = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validGuess(guess)
    })

}

function validGuess(guess) {
    //check if number is in the range, if it is actually a number?
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if(guess < 1) {
        alert('please enter a number greate than 1')
    } else if (guess > 100){
        alert('please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        console.log(numGuess);
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    // is val is < or > or = randomVAL
    if (guess === randomNumber) {
        displayMessage('Yow guessed it right')
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Numbe is too low!')
    } else {
        displayMessage('Number is too high!')
    }
}

function displayGuess(guess) {
    //decrementing count
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    count.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHight.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')//peventing user to type in input
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start Over</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        e.preventDefault()
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        count.innerHTML = `${ 11 - numGuess }`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')
        playGame = true;

    })
}

