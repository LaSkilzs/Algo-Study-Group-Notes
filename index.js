// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//Split array into amount of "size"
//If odd number, create extra array(s) for remaining elements
//Print out final array(s)


function chunk(array, size) {

    let masterArray = [];
  
    while(array.length){
      masterArray.push(array.splice(0, size)); 
    }
  
      console.log(masterArray);
  }
  
  // function chunk(array, size){
  //   let newArray = [];
  
  //   if(array.length - 1 % size == 0){
  //     console.log(array.splice(0, size));
  //   }
  // }
  
  
  
  chunk([1,2,3,4], 2);
  module.exports = chunk;
  
  // function chunk(array, size) {
  //   const chunked = [];
  //
  //   for (let element of array) {
  //     const last = chunked[chunked.length - 1];
  //
  //     if (!last || last.length === size) {
  //       chunked.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }
  //
  //   return chunked;
  // }
  