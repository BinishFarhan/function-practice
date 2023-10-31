// // Q1.==>  Write a program that returns your age in days. (take age as an input)

// function ageInDays(a){
//     var age = a * 365
//     return age;

// }
// var age = +prompt('Enter your age')
// var ageInDay = ageInDays(age)
// console.log(`I am ${age} years old === ${ageInDay} days .`)

// // Q2.==> Create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input)

// function increments(a) {
//     return ++a;
// }

// var result = increments(420)
// console.log("increament ===>", result)


// // Q3.===> Create a function that takes a number as an argument, decrements the number by -1 and returns the result.

// function deccrement(a) {
//     return --a;
// }

// var result = deccrement(999)
// console.log("decreament == >:", result)

// // Q4. ===> Create a function that takes a number and return square of a number

// function sqr(a) {
//     return Math.pow(a,2)
// }
// var num = prompt('Enter a number to get square of it.')
// var result = sqr(num)
// console.log("The sqaure of", num, "is" , result)

// // Q5.===> Create a function that tells current time in Y-m-d format.
// function currentTime() {
//     var date = new Date()

//     console.log(`Current Date === > ${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`)
// }

// currentTime()

// // Q6. ===> Create a function  that tells current time from Date object in H:i:s format.

// function Time() {
//     var date = new Date()

//     console.log(`Current Time ==== > ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }

// Time()


// ## Create a function which return true if given input is in the array
// function inpTrue(a,b){
//     var flag = false
//     for(let i = 0; i < a.length; i++){
//         if(b === a[i]){
//             flag = true
//         }
//     }
//     return flag;
// }
// var uI = prompt('Enter city name')
// var arr = ['karachi','islamabad' , 'lahore']
// console.log(inpTrue(arr, uI))


// ## Create a function that take array input and make each element double and then return an array (use for loop)
// function double(a) {
//     var newArr = [];
//     for (let i = 0; i < a.length; i++) {
//         var sqr = a[i] + a[i]
//         newArr.push(sqr)
//     }
//     return newArr;
// }

// var numArray = [2, 4, 5, 6, 7, 10]
// console.log("Double of" , numArray, "is" , double(numArray))


//  ## Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// function vowels(str){
    //     var vowels = ""
    //     for(let i = 0; i < str.length; i++){
    //         // console.log(str[i])
    //         var char = str[i]
    //         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    //             vowels += str[i]
    //         }
    //     }
    //     return vowels;
    // }
    
    // var str = 'The quick brown fox'
    // console.log(`There are ${vowels(str).length} vowels in "${str}"`)
    

//  ## Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223


// function revNum(a) {
//     var numToString = a.toString()
//     var revNumb = " "
//     for (let i = numToString.length - 1; i >= 0; i--) {
//         revNumb += numToString[i]
//     }
//     return revNumb
// }
// var num = 32243
// console.log(revNum(num))


// ## 17 Write a JavaScript function to format a number up to specified decimal places. 
// Go to the editor
//  Test Data : 
// console.log(decimals(2.100212, 2));  //"2.10" 
// console.log(decimals(2.100212, 3)); //2.100  
// console.log(decimals(2100, 2)); // 2100.00

// function toFixed(a,b){
//     console.log(a.toFixed(b))
// }

// toFixed(2.100212, 2)
// toFixed(2.100212, 3)
// toFixed(2100, 2)


// ## 18 write a function that generates random number between given two inputs

// function random(max, min){

//     console.log(Math.floor(Math.random()*(max - min + 1) + min))
//     console.log(Math.ceil(Math.random()*(max - min) + min)) // por we can use this one also
// }

// var max = +prompt('Enter max number')
// var min = +prompt('Enter min number')
// random(max, min)




// ## 19 write a function that generates number between 1-10 and find the item in array witrh index of this number.  
// for example if random number 5 is generated it will return item in array with 5 index. 
// [11, 22 , 33, 44, 55, 66, 77, 88, 99,10] "your item at index 5 is 66"

// function findInArray(a){
//     var res = Math.floor(Math.random()* a.length-1)
//     var win = a[res]
//     console.log(`your item at index ${res} is ${win}`)
// }

// var arr = [11, 22 , 33, 44, 55, 66, 77, 88, 99,10]
// findInArray(arr)


// ## A function is taking 5 arguments and You have to pass it through an array.
// ```let arr = [1,2,3,4,5]```