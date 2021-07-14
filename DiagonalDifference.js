// https://www.hackerrank.com/challenges/diagonal-difference/problem


// Params: Taken an array of integers
// Return: Return absolute value of left and right diagonal after calculating their total
//
// Example  3 8 1
//     2 5 11
//     -7 4 9
//
// Left to right diagonal  3 + 5 +  9 = 17
// Right to left diagonal 1 + 5 - 7 = -1
// 	Absolutely value | 17 - 1 | = 16


    //create an empty array name left diagonal
    //create an empty array name right diagonal
    //Loop through the two dimensional array
      //check if the incrementer is equal to the indexes of the array
        //push the value from the index to the left diagonal array
   //sum left diagonal array

   //Loop throught the two dimensional array starting from the last indexes
       // finish writing. Stop when I'm guessing
   //sum right diagonal array

// Get the difference of left diagonal and right diagonal
// Get the absolute value of difference


function diagonalDifference(arr) {
    let leftDiagonal = []
    let rightDiagonal = []
   //
    for(let i = 0; i < arr.length; i++){
      // console.log(arr[i][i]);
          leftDiagonal.push(arr[i][i])
    }
    leftDiagonal.reduce((a,b) => a + b)
    for(let i = 0; i <  arr.length; i++){
      rightDiagonal.push(arr[arr.length -1][])
    }
    console.log(rightDiagonal);

}

console.log(diagonalDifference([[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
));
