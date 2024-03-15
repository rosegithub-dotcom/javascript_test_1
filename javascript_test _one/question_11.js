function splitIntoWords(sentence) {
    return sentence.match(/\b\w+\b/g);
}

const sentence = "This is javascript test";
const wordsArray = splitIntoWords(sentence);
console.log(wordsArray);