const sentence = "Javascript is awesome";
console.log(sentence.indexOf("is", 11))
console.log(sentence.indexOf("JavaScript", 0)) // return -1 indexOf() method is case sensitive
console.log(sentence.indexOf("Javascript", 0))
console.log(sentence.indexOf("awesome"))