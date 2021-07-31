// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided.
// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// b) Create the function that makes the test pass.

//get a shell test
    // run it to make it fail
// creat a function that will take in an array arrayIn()
//function should remove first item ... maybe .shift 
//after first item, array should be shuffled.
// maybe a shuffle method? math random

////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// describe("function", () => {
//     test("a function that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
//       expect(arrayIn(["purple", "blue", "green", "yellow", "pink"])).toContain("blue", "green", "yellow", "pink")
//     expect(arrayIn(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])).toContain("indigo", "periwinkle", "ochre", "aquamarine", "saffron")
//     })
// })
// // I had to look for the .toContain and it only works if you remove the [] from the array
// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// const arrayIn = (array) =>{
//     oneLess = []
//     for (let i = 0; i < array.length; i++) {
//        oneLess = array.slice(1)
//     }
//     cupidShuffle = oneLess.sort(() => Math.random() - 0.5) // this math.random I had to look up for the syntex
//     return cupidShuffle
// } 

// console.log(arrayIn(colors1))
// console.log(arrayIn(colors2))
////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
// a) Create a test with expect statements for each of the variables provided.
// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67 8, 24]
// Expected output: [5, 109]
// b) Create the function that makes the test pass.


// // creat a test, let test fail.
//     // test will test will take in an array and expect a SORTED array
// //fn will take in array and sort them from min to MAX .sort a-b
// // fn will ONLY ONLY ONLY ONLY>>>>> return 2 numbers min and MAX
// // might need an empty array.

// describe("an Array of numbers", () => {
//     it("only the smallest number and largest number", () => {
//       expect(numsArray([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90])
//       expect(numsArray([109, 5, 9, 67, 8, 24])).toEqual([5, 109])
//     })
// })
// const numsArray = (array) =>{
//     sortedNums = array.sort((a, b) => a-b)
//     lilNum = sortedNums.shift()// so i managed to isloted each value that I wanted, .concat is not working
//     bigNum = sortedNums.pop()
//     answerArray =[lilNum,bigNum] //after a very long while, I thought will maybe its as easy as calling my new var's into an array and yes, yes it is. 
//     // console.log(bigNum)
//     // console.log(lilNum)

//     return answerArray
// }
// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// console.log(numsArray(nums1))
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// console.log(numsArray(nums2))
// // Expected output: [5, 109]










// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// var testArray1 = [3, 7, 10, 5, 4, 3, 3]
// var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
