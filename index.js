// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str){

    var newArray = str.split(' ');
    var finalArray = [];

    for(let word of newArray){
        word = word.split('');
        word[0] = word[0].toUpperCase();
        word = word.join('');
        finalArray.push(word);
    }

    console.log(finalArray.join(' '));
   
 }

 capitalize('a short sentence')


// function capitalize(str) {

//     var stringArray = str.split();

//     for(var i = 0; i <= stringArray.length - 1; i++){

//         console.log(string[i].charAt(0).toUpperCase());
//     }

// }

module.exports = capitalize;
