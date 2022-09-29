/* 1.a */


function countWords(paragraph, first, second) {
    let split = paragraph.split(/[\s.]+/)
    let countFirst = 0;
    let countSecond = 0;
    for (let i = 0; i < split.length; i++) {
        if(split[i] === first) {
            countFirst++;
        }
        else if(split[i] === second) {
            countSecond++;
        }
    }
    if(countFirst > countSecond) {
        return first
    }
    else {
        return second
    }
}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph,'love', 'you'));



/* 2c */
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(["A", "B", "C"]));
["C", "B", "A"]