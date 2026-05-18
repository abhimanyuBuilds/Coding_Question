// Phase 1 — Understand Array Basics & Memory Flow

// // Goal:

//  *** Understand how values are stored ***

// How indexes work
// How loops move through memory


// *** Questions *** 
/*
Print all elements of array           ✅
Print array in reverse                ✅
Find length manually without .length  ✅
Sum all elements              ✅
Find average                  ✅
Find largest element          ✅
Find smallest element         ✅
Find second largest     ❌
Find second smallest    ❌
Count even and odd numbers    ✅
Find max difference between two elements ✅
Copy one array into another manually     ✅
Reverse array without .reverse()         ✅  
Swap first and last element              ✅ 
Move all zeros to end                    ✅
Move all negative numbers to left side   ✅
Check if array is sorted                ✅ ⁉️
Find missing number from 1 to N        ✅  ⁉️
Find first duplicate
Find all duplicates
*/



// const arr = ["Abhimanyu Singh", "Karan Rathore" , "Gurdeep Randhawa" , "Sukhvinder Dhillon" , "IX-JAT" , "PUNJAB" , "RR" , "RVC" , "AMC" , "GAROUD" , "SOG" , "SPG"];
// const arr = [12, 13, 14, 15, 16]

// console.log(arr) Q -1 

// Q-2 with reverse method and without reverse method 


// console.log(arr.reverse()) 

/* 
Solution with reverse method 
[
  'SPG',
  'SOG',
  'GAROUD',
  'AMC',
  'RVC',
  'RR',
  'PUNJAB',
  'IX-JAT',
  'Sukhvinder Dhillon',
  'Gurdeep Randhawa',
  'Karan Rathore',
  'Abhimanyu Singh'
]*/



// for (let i = arr.length -1 ; i >= 0 ; i--){
//     console.log(arr[i])
// }

/*
Solution with out reverse method
SPG
SOG
GAROUD
AMC
RVC
RR
PUNJAB
IX-JAT
Sukhvinder Dhillon
Gurdeep Randhawa
Karan Rathore
Abhimanyu Singh
*/





//  Q-3 find length with out length
// console.log(arr.length) 
// 12 length with method to see only now doing this without method


// let count = 0 
// for (let item of arr){
//     count++
// }
// console.log(count)  // 12




//  Q-4 sum all element


// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }                                                                                  // const arr = [12, 13, 14, 15, 16]
// console.log(sum)     // if u write only sum += i then output would be {10} because of indexing 0 + 1 + 2 + 3 + 4 = 10 



// let sum = 0 ;
// for (let arrays of arr){
//     sum += arrays
// }
// console.log(sum)



//  Q-5 Average find

// function findAverage(arr){
//     let sum = 0 
//     for (let Array of arr){
//         sum += Array
//     }
//     let result = sum / arr.length
//     return result

// }

// console.log(findAverage(arr))


// console.log(arr.length) // 5

// function findAverage() {
//     let sum = 0;
//     let totalArray = 0;
//     for (let arrays of arr) {
//         totalArray++
//         sum += arrays
//     }
//     let result = sum / totalArray
//     console.log("Total array would be:", totalArray)
//     console.log("Sum of the array would be:", sum)
//     return result
// }
// console.log(findAverage())



// Q - 6
// finding largest element


// function largeFind(arr){
//     let maxValue = arr[0]
//     for (let Array of arr){
//         if(Array > maxValue){
//             maxValue = Array
//         }
//     }
//     return maxValue
// }

// console.log(largeFind(arr))



// function largestElement(){
//     let firstMax = arr[0];
//     for (let i = 0; i < arr.length ; i++){
//         if(arr[i] > firstMax){
//             firstMax = arr[i]
//         }
//     }
//     return firstMax
// }
// console.log(largestElement())



//  Q -7
//  finding smallest Element

// function smallestElement(arr){
//     let small = arr[0]
//     for ( let Array of arr ){
//         if(Array < small){
//             small = Array
//         }
//     }
//     return small
// }
// console.log(smallestElement(arr))



// function smallestElement(){
//     let SmallValue = arr[0];
//     for (let i = 0 ; i < arr.length ; i ++){
//         if(arr[i] < SmallValue){
//             SmallValue = arr[i]
//         }
//     }
//     return SmallValue
// }
// console.log(smallestElement())


/*

{


//  Q- 8
// finding second largest

//  Q - 9 

}

*/



//  Q - 10 count odd even


// function oddEvenCount(arr){
//     let oddCount = 0 
//     let evenCount = 0 

//     for ( let Array of arr){
//         if(Array % 2 === 0){
//             evenCount++
//         }else{
//             oddCount++
//         }
//     }
//     return {oddCount , evenCount}
// }

// console.log(oddEvenCount(arr))



// function evenOddCount(arr) {
//     let evencount = 0
//     let oddcount = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evencount++
//         } else {
//             oddcount++
//         }
//     }
//     return { "even": evencount, "odd": oddcount }
// }

// console.log(evenOddCount(arr))

//  Q - 11 find max difference between two element

// const arr1 = [12 , 18]
// function findDifference(){

//     if(arr1[0]>arr1[1])
//     {
//         return arr1[0]-arr1[1]
//     }
//     else
//     {
//         return arr1[1]-arr1[0]
//     }
// }

// console.log(findDifference(arr1))


// const arr1 = [12,  14, 18, 24]



// function findDifference(arr){
//     let differenes = []
//     let refrenceValue = arr1[0]
//     for ( let Array of arr1){
//         differenes.push(Array - refrenceValue)
//     }
//     return differenes
// }
// console.log(findDifference(arr1))

// function findDifferenceBetween(arr1) {
//     let differences = [];
//     let refrenceValue = arr1[0]
//     for (let i = 1; i < arr1.length; i++) {
//         differences.push(arr[i] - refrenceValue)
//     }
//     return differences
// }

// console.log(findDifferenceBetween(arr1))


// function findDifferenceOfEach(arr1){
//     let differences = [];
//     let refrenceValue = arr1[0]

//     // console.log(refrenceValue)
//     for ( let i = 0 ; i < arr1.length ; i++){
//         differences.push(arr1[i] - refrenceValue)
//     }
//     return differences
// }

// console.log(findDifferenceOfEach(arr1))


//  Q - 12

// copy all array from another array manually

// const arr1 = [ 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 ]
// let arr3 = []
// let arr2 = []

// function copyingArray(arr1){
//     for ( let i = 0 ; i < arr1.length; i++){
//         arr2.push(arr1[i])
//     }
//     return arr2
// }
/*

function copy(arr1){
    for ( let i = 0 ; i < arr1.length ; i++){
        arr3[i]= arr1[i]  // if we dont write arr3[i] then output would be {19} because it will overwrite the array again and again 12 come okay store but when iteration goes to 13 it will over write 12 that'y arr3[i] comes if u use arr3[i] then it will ask arr2[i] that store each element at their own index
    }
    return arr3
}
console.log(copy(arr1))
*/

// console.log(copy(arr1), "This is a copy ")
// console.log(copyingArray(arr1), "I'm Array function copyingArray")

// let arr4 = arr1.slice(0 , )
// console.log(arr4, "I'm Array 4")

//  Q - 13 Reverse an array without reverse
// const arr1 = [123,13444 ,1483 , 13930 , 1939 , 29292 , 29383]
// function reverseArray(arr1){
//     let reverse = []
//     for (let i = arr1.length - 1; i >= 0; i--){
//         reverse.push(arr1[i])
//     }
//     return reverse
// }


// console.log(reverseArray(arr1))


//  Q - 14 Swap first and last number

// const arr1 = [1244, 4431, 4453, 5543, 6675]

// function swapTwoNumber(arr1){
//     let firstValue = arr1[0];
//     let lastValue = arr1[arr1.length-1];

//     arr1[0] = lastValue;
//     arr1[arr1.length - 1] = firstValue
//     return arr1
// }
// console.log(swapTwoNumber(arr1))




// Q - 15 move all zeros to end


// const arr1 = [0, 0, 0, 1, 12, 13, 14, 15, 16, 17, 18]

// function zeroAtEnd(arr1) {
//     let arr2 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== 0) {
//             arr2.push(arr1[i])

//         }
//     }
//     for (let j = 0 ; j < arr1.length; j++){
//         if(arr1[j] === 0){
//             arr2.push(arr1[j])
//         }
//     }
//     return arr2

// }
// console.log(zeroAtEnd(arr1))


/* 

// removeZero from start 
const arr = [0 , 0 , 0 , 0 , 12 , 12 , 12 , 13 , 13 , 14 , 15 , 1 , 1 ]

// function removingZero(arr){
//     let arr2 = []
//     for(let h = 0; h < arr.length ; h++){
//         if(arr[h] === 1){
//             arr2.push(arr[h])
//         }
//     }
//     for ( let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > 1){
//             arr[i] % 2 === 0 
//             arr2.push(arr[i])
//         }
//     }
//     for(let j = 0 ; j < arr.length ; j++){
//         if(arr[j] === 0 ){
//             arr2.push(arr[j])
//         }
//     }
//     return arr2
// }

// console.log(removingZero(arr))
*/




//     Q - 17          Move all negative numbers to left side  



// const arr = [ 12 , 13 , 14 , 15 , 16 , 17 , -19 , -13 , -66]

// function neagtiveNumber(arr){
//     let arr2 =[]
//     for (let i = 0 ; i < arr.length ; i++){
//         if(arr[i] < 0){
//             arr2.push(arr[i])
//         }
//     }
//     for ( let j = 0 ; j < arr.length ; j++){
//         if(arr[j] > 0){
//             arr2.push(arr[j])
//         }
//     }
//     return arr2
// }

// console.log(neagtiveNumber(arr))



//  Q - 18 check array is sorted or not 

// const arr = [1 , 2 , 3 , 4, 5 , 6 , 7]


// function arraySorting(arr){
//     let isSorted = true
//     for (let i = 0 ; i < arr.length -1 ; i++){
//         if(arr[i] > arr[i+1]){
//             isSorted = false
//             break 
//     }
//     }
//      if(isSorted){
//             console.log("Array is sorted" , arr)
//         }else{
//             console.log("Array is not sorted", arr)
//         }
//    }
// arraySorting(arr)


// Q - 19 check if number is missing in array or not 

// const arr = [12 , 13 , 14,  16]


// function missingFind(arr) {
//     let isMissing = false
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i+1] - arr[i] !== 1) {
//             isMissing = true
//             console.log("Missing number is:", arr[i] + 1)
//             break
//         }
//     }
//     if (isMissing) {
//         console.log("In Array Number is Missing", arr)
//     } 
// }

// missingFind(arr)

