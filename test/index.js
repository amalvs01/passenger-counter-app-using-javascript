//document.getElementById("count-el").innerText = 5
// let bonusPoints =50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints * 45;
// console.log(bonusPoints);



// function countdown() {
//   console.log (5);
//   console.log (4);
//   console.log (3);
//   console.log (2);
//   console.log (1);
// } 
// countdown()


//create a funtion(youdecide the name) that logs out the number 42 to the console
//call/invokethe function

// function myLogger(){
//   console.log(42)
// }
//   myLogger()


// let lap1 =34
// let lap2 =33
// let lap3 =36

//Create a function that  logs out the sum of all lap times

// function logLapTime() {
//     let  totalTime= lap1 + lap2 + lap3
//    console.log(totalTime)
// }

// logLapTime()

// let lapsCompleted = 0

// //Create a function that increment the lapsCompleted variables with one
// //run it three times

//  function incrementLap (){
//    lapsCompleted = lapsCompleted + 1;
//  }

//  incrementLap()
//  incrementLap()
//  incrementLap()

//  console.log(lapsCompleted)


//create  a variables,message, tht stored in the  string: "you have tree notifications"

// let username =  "per"
// let message = "you have tree new notifications"
// console.log( message + "," + username + "!")

// //oR
// let messageToUser = message + "," + username + "!"
// console.log(messageToUser)

// string vs no.
//log greeting to console

// let name = " jack"
// let greeting = "Hi, my  name  is"
// let myGreeting = greeting + name

// console.log(  myGreeting)

//  let name = 42
//  let greeting = "Hi, my  name  is"
//  let myGreeting = greeting + name
//  console.log(  myGreeting)

// //  let points = 4
// //  let bonusPoints = "10"

// //  let totalPoints = points + bonusPoints

// //  console.log(totalPoints)//ans 410 bcz 4 is a number and 10 is a string
  
// console.log(4 + 5)//9
// console.log("2" + "4")//"24"
// console.log("5" + 1)//"51"
// console.log(100 + "100")//"100100"
// // numbers are blue and strings are white

let welcomeEl = document.getElementById("welcome-el")   


let name = " john "
let greeting =  " welocme back "
welcomeEl.innerText =   greeting + name 

 welcomeEl.innerText += "🫡"