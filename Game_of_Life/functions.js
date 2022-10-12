function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);}

function getRandomArrayElement(arr) {
    if (arr && arr.length > 0) {
        let randIndex = getRandomInt(arr.length, 0);
        return arr[randIndex];
    } else {
        return undefined;
    }
}

module.exports =  { getRandomArrayElement }