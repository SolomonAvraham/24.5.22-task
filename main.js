// 150 צרו פונקציה שמחזירה מספר רנדומלי בין 0 ל-10.
function funcReturnRandomNum() {
  var rndNum = Math.floor(Math.random() * 10);
  return rndNum;
}

// 151 צרו פונקציה המקבלת כארגומנט מספר
// ומחזירה מספר רנדומלי מאפס ועד למספר שהתקבל.

function getRandomNum(num) {
  num = Math.floor(Math.random() * num);
  return num;
}
getRandomNum(30);

// 152 צרו פונקציה המקבלת מספר מהמשתמש ומייצרת מספר רנדומלי בין 0 ל-10,
//  אם המספר זהה מדפיסה הודעת הצלחה אחרת הודעת כישלון.

function getRandomNumFromUser() {
  var userNum = +prompt("Enter a Number:");
  var rndNum = Math.floor(Math.random() * 10);
  if (userNum == rndNum) {
    console.log("Good Job!");
  } else {
    console.log("ERROR!");
  }
}

// 153 צרו פונקציה שמאכלסת מערך של 10 איברים במספרים רנדומליים בין 0 ל-100.

function getRandomArray() {
  var myArray = [];
  for (var i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 100));
  }
  console.log(myArray);
}
getRandomArray();

// 154 צרו פונקציה המקבלת מספר מהמשתמש ומייצרת מספר רנדומלי בין 0 ל-10,
//  הפונקציה מחזירה את הגדול מביניהם.

function getRandomNumFromUser() {
  var userNum = +prompt("Enter a Number:");
  var rndNum = Math.floor(Math.random() * 10);
  var max = Math.max(userNum, rndNum);
  return max;
}

// 155 צרו פונקציה המקבלת מהמשתמש 5 מספרים ומדפיסה את הנמוך מביניהם.

// function funcGetFiveNumFromUser() {
//   var a = 1;
//   var b = 0;
//   for (var i = 0; i < 5; i++) {
//     var userNum = +prompt("Enter a number:");

// }
// console.log(Math.min(a,b));
// }
// funcGetFiveNumFromUser();

//  לא פתור!

// 156 צרו פונקציה המקבלת מהמשתמש מספר ומייצרת מספר רנדומלי בין 0 ל- 100,
//  אם המספר של המשתמש זוגי היא מחזירה את המספר הנמוך מביניהם אחרת את המספר הגבוה.

function getNumFromUserAndPrintEvenNum() {
  var userNum = +prompt("Enter a Number:");
  var rndNum = Math.floor(Math.random() * 100);
  if (userNum % 2 == 0) {
    return Math.min(userNum, rndNum);
  } else {
    return Math.max(userNum, rndNum);
  }
}

// 157 	צרו פונקציה שמייצרת מערך עם אורך רנדומלי בין 0 ל 364 וערכים רנדומליים בין 0 ל 873.
function arrayFunctionRandom() {
  var myArray = [];
  for (var i = 0; i < Math.floor(Math.random() * (364-0)+0); i++) {
    var rndNum = [Math.floor(Math.random() * (873-0)+0)];
    myArray.unshift(rndNum);
  }
    return myArray;
}

// שאלה: האם אפשר להציב פונקציות או אובייקטים בתוך התנאי?

// 158	צרו פונקציה המקבלת מערך ומייצרת אינדקס רנדומלי
// , הפונקציה מדפיסה איבר מהמערך על פי האינדקס הרנדומלי.

// function funcGetArray(myArray) {
// myArray=
    
// }
// funcGetArray([]);