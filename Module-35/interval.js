console.log("Task 1");

setTimeout(function() {
    console.log("Task 2 (Async)");
}, 2000); // setTimeout delays execution by 2000 milliseconds (2 seconds)

console.log("Task 3");




// // setTimeout example
// setTimeout(function() {
//    console.log('This will be executed after 2000 milliseconds');
// }, 2000);

// // setInterval example
// var intervalId = setInterval(function() {
//    console.log('This will be executed every 1000 milliseconds');
// }, 1000);

// // Cancelling setTimeout after 3000 milliseconds
// setTimeout(function() {
//    clearTimeout(intervalId);
//    console.log('Timeout cleared. setInterval will stop executing.');
// }, 3000);
