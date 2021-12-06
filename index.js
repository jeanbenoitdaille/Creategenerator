function getDiceInteger() {
    return Math.floor(Math.random() * 6) + 1;
}
 
function rollTheDices() {
    for (let i = 0; i < 6; i++) {
        console.log(getDiceInteger());
    }
}
 
rollTheDices();