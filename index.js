function test (x){
let num =2147483647;
let num2 = -2147483647

let temp = x.toString().split('').reverse().join('')
   temp = parseInt(temp) * Math.sign(x);

   if( x > num || x<num2){
     return 0
   }
   else if (temp > num || temp < num2) {
 return 0
   }
   else{
     return temp;
   }


}

console.log(test(1534236469));
