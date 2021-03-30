function twosum(nums, target){
  let z=0;
  // console.log(target);
  let sum =0;
  let temp;
   for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])

   sum+=nums[i]
   if (sum === target) {
    // console.log(sum);
    temp = [i]
    console.log(temp);
    // return sum
      }
   // console.log(sum);
   }


}

console.log(twosum([2,2,11,7,15],9));
