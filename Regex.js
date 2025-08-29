// Regular Expressions In JavaScript.
// Regular Expressions
/*
1. . = any character except newline.
2. \w\d\s = word, digit,whitespace.
3. \W\D\S = not word, digit,whitespace.
4. [abc]  = any of a, b, or c.
5. [^abc] = not a, b, or c.
6. [a-g]  = character between a & g.
*/
// const regex = /very/g // Giving Regular Expression.
const regex =/.arry/g
const text = "Elon is a very very nice boy!!..";
console.log(text.replace(regex,"VERY"));