let userNumber = NaN;
while (Number.isNaN(userNumber)) {

    const userInput = prompt('count from 0 to ...');
    console.log('userInput:', typeof userInput, userInput);

    if (userInput === '' || userInput === null) {
        alert('nope, enter something');
        continue;
    }

    userNumber = Number(userInput);
    console.log('userNumber:', typeof userNumber, userNumber);

    if (Number.isNaN(userNumber)) {
        alert('"' + userInput + '" is not a number');
    }

}


for (let numberToAlert = 0; numberToAlert <= userNumber; numberToAlert++) {
    alert(numberToAlert);
}