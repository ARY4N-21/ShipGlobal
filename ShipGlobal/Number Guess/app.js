let num = Math.floor(Math.random() * 100) + 1;
let turns = 5;

function checkGuess() {
    const userGuess = document.querySelector('#guessInput').value;
    const message = document.querySelector('#message');
    const chances = document.querySelector('#chances');

    if (userGuess === '') {
        message.innerText = 'Please enter a number.';
        message.style.color = 'red';
        return;
    }

    const guessNumber = Number(userGuess);

    if (isNaN(guessNumber)) {
        message.innerText = 'Invalid input. Please enter a valid number.';
        message.style.color = 'gray';
        return;
    }

    if (guessNumber < 1 || guessNumber > 100) {
        message.innerText = 'Please enter a number between 1 and 100.';
        message.style.color = 'gray';
        return;
    }

    if (guessNumber === num) {
        message.innerText = 'Congratulations! You guessed the right number!';
        message.style.color = 'gray';
    } else if (guessNumber > num) {
        message.innerText = 'Your number is too high.';
        message.style.color = 'gray';
    } else {
        message.innerText = 'Your number is too low.';
        message.style.color = 'gray';
    }

    turns--;
    chances.innerText = turns;

    if (turns === 0) {
        message.innerText = `Game over! The number was ${num}.`;
        document.querySelector('#guessInput').disabled = true;
        document.querySelector('button[onclick="checkGuess()"]').disabled = true;
    }
}

function restartGame() {
    num = Math.floor(Math.random() * 100) + 1;
    turns = 5;
    document.querySelector('#message').innerText = '';
    document.querySelector('#chances').innerText = turns;
    document.querySelector('#guessInput').disabled = false;
    document.querySelector('button[onclick="checkGuess()"]').disabled = false;
    document.querySelector('#guessInput').value = '';
}
