function repeatedstring(s,n) {


let temp = s;
//set count to zero
let count=0;
while(temp.length<n){

 temp = temp.concat(' ',s)

}
// starting from and end ahdhjdfjht n time
temp =temp.substr(0,n)
console.log(temp);
for (var i = 0; i < temp.length; i++) {
  if (temp[i]==='a') {
   count++;
  }

}
return count;
}
  console.log(repeatedstring("abcac",8));
