

function fact (){
    let num = +prompt("Enter any number")

    for (let i = num ; i > 0; i--) {
        num = num * i
    }

    document.writeln(num)

}

fact()


// function calculator() {
//     var num1 = +prompt("Enter your fisrt number")
//     var num2 = +prompt("Enter your second number")
//     var op = prompt("Enter your operator number")
//     var resultnum = output(num1, num2, op)
//       var resultnum = output(num1, num2, op);
//     if (resultnum != null) {
//         console.log("Result:", resultnum);
//     } else {
//         console.log("Invalid operator!");
//     }




// }

function output(a, b, op) {
    if (op == "+") {
        return (a + b)

    }
    if (op == "-") {
        return (a - b)

    }
    if (op == "/") {
        return (a / b)

    }
    if (op == "*") {
        return (a * b)

    }
}

calculator()


function square(){

    num = +prompt("Enter your number")
    if (num!= null) {
        sq = num * num
        
    }
    else{
        console.log("Enter a valid number")

    }
    document.writeln(`"sqare of " ${num} " is   ${sq} `)



}

square()


// function test(counter) {
//      console.log("test");
//      if (counter > 0)
//          test(--counter);
// }
// test(3);

// let x = 10;
// function test() {
//      let x = 20;
//      console.log(x);
// }
// let x = 10;
// function test(x) {
//      console.log(x);
// }
// test(20);


// let x = 10;
// let y = 20;
// function test(y) {
//      console.log(y);
// }
// test(x);
// let show = function () {
//      console.log("test");
// }
// setTimeout(show, 2000);

// let n = 2 * 3 ** 3 - 1;

// console.log(n)

// var str = "12"
// str = +str;
// console.log(str);
