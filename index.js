// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}
const gifts = [`teddy bear`, `drone`, `doll`];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

const names = [`Ada`, `Brendan`, `Ali`];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        return `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        debugger;
    }
    
}

writeCards(names, `birthday`);*/

// function countDown(number) {
//     //let i = number;
//     while (number >= 0) {
//         console.log(number);
//         number--;
//     }
// }

// countDown(5);

const writeCards = (names, event) => {
    const newArray = []
    for(let counter = 0; counter < names.length; counter++) {
        let msg = `Thank you, ${names[counter]}, for the wonderful ${event} gift!`
        newArray.push(msg);
    }
    return newArray;
}
// console.log(writeCards(['Ada', `Brendan`, `Ali`]))

const countDown = (num) => {
    let counter = num
    while (counter >= 0) {
        console.log(counter)
        counter--
    }
}

countDown(10)