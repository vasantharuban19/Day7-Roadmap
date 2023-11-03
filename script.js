const arr = ["apple","mango","orange"];
const res = arr.map((ele)=>ele+"s")
console.log(res);
console.log(arr);

const arr1 = [12,13,14,15];
const arr2 = [];
for(var i=0;i<arr1.length;i++){
    if(arr1[i]%2===0){
        arr2.push(arr1[i]);
    }
}
console.log(arr2);

const array = [12,13,14,15];
const result = array.filter((ele)=>ele%2===0)
console.log(result);

const great = [4,3,2,1,5];
const resu = great.filter((ele)=>ele>2)
console.log(resu);

const array1 = [1,2,3,4,5];
const result1 = array1.reduce((acc,cv)=>{
    return acc*cv;
},1)
console.log(result1);

const array2 = [1,2,3,4,5];
const result2 = array2.reduce((max,i)=>{
   if(i>max){
    max =i;
   }
   return max;
},0)
console.log(result2);

