/* 1.a */
function countWords(paragraph, first, second) {
    let split = paragraph.split(/[\s.]+/)
    let countFirst = 0;
    let countSecond = 0;
    for (let i = 0; i < split.length; i++) {
        if (split[i] === first) {
            countFirst++;
        }
        else if (split[i] === second) {
            countSecond++;
        }
    }
    if (countFirst > countSecond) {
        return first
    }
    else {
        return second
    }
}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph, 'love', 'you'));


/* 1.b */
function cleanText(text) {
    const replace = text.replace(/[`~!@#$%^&*()_|+\-=;:'",<>\{\}\[\]\\\/]/gi, '')
    return replace
}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));

/* 2c */
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(["A", "B", "C"]));
["C", "B", "A"]