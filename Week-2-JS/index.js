const fs = require("fs");

function print(err, data) {
  console.log(data);
}

// fs.readFile("a.txt", "utf-8", print); // asynchornously
// fs.readFile("b.txt", "utf-8", print); // asynchornously

// console.log("Done!");

function timeout() {
  console.log("Click the button");
}

console.log("Hi");
setTimeout(timeout, 1000);/* io intensive task and it as it completed first it will be 
waiting in Callback Queue and its independent task  which finish itself */
console.log("Welcome to loupe"); 

let count = 0; /* cpu intensive task which need computing power of the thread so the 
thread will busy in this operation and this task running  in call stack 
*/
for (i = 0; i < 1000; i++) {
  count = count + 1;
}

console.log("Expensive operation done!");

/* this will mbe the sequence 
Hi
Welcome to loupe
Expensive operation done!
Click the button
 */
