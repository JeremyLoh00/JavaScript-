let letter = ['N','I','C','E'];

function combine(word, nextWord){
    return word + nextWord;
}

let newLetter = letter.reduce(combine);
console.log(newLetter);

let newLetter2 = letter.reduceRight(combine);
console.log(newLetter2);

//L27 Arrow function 

newLetter = letter.reduce((word,nextWord) => word + nextWord );
console.log(newLetter);