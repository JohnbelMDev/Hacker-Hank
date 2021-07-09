// Link https://www.hackerrank.com/challenges/grading/problem

//
// Difference means subtracting.
//
// Params: Taking an integer (Grading)
// Returning the grade after rounding as appropriate
//
// Example:
//  	Grade = 86  ( 90 - 85 is not than 3)  Do not round
// 	Grade = 44 (45 - 44 is than 3) return 45
//             Grade 61 ( 65 - 61 is not less than 3 ) Do not round
//
//       Create an empty array name numbersLessThanN
//       Create a variable call difference
//       Create a multiplication table from 0 up to 100
//  	Create a condition that check for all the numbers less larger than the parameter
// 		Push all the value to numbersLargerThanN
// 				Subtract the first number that is first found
// 				     If the difference is smaller than 3
// 				        Return first number found
// 				Else
// 				  Return the given parameter

function gradingStudents(grades){
  let numbers = []
  for (let i = 0; i < grades.length; i++){
        numbers.push(gradingStudent(grades[i]))
  }
  return numbers
}
function gradingStudent(grade) {
  let difference, answer;
  let numbersLargerThangrade = []
  let multiplicationTable = [];
  if(grade < 38){
    answer = grade
  }
  else{
  for (var i = 0; i <= 20; i++) {
    multiplicationTable.push(i * 5)
     if(multiplicationTable[i] >= grade){
         numbersLargerThangrade.push(multiplicationTable[i])
         difference = numbersLargerThangrade[0] - grade
         if(difference < 3){
          answer = numbersLargerThangrade[0]
          break;
         }
         else {
            answer = grade
            break;
         }
     }
  }
}
return answer
}

console.log(gradingStudents([4,73,67,38,33]))
// console.log(gradingStudents(73))
// console.log(gradingStudents(67))
// console.log(gradingStudents(38));
// console.log(gradingStudents(33));
