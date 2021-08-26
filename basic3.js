document.write("my name is lamiya");
document.write("<br>");


var num1 =parseInt(prompt('enter first number'));

var num2 =parseInt(prompt('enter second number'));

var sum = num1 + num2;
document.write( "sum is " + sum);
document.write("<br>");

var a =parseInt(prompt('enter the number'));
var c =Math.sqrt(a);
document.write( "square root is " + c);
document.write("<br>");

var base =parseInt(prompt('enter the base'));

var h =parseInt(prompt('enter the height'));
var area=0.5*base*h;
document.write( "area of triangle is " + area);
document.write("<br>");

let x=prompt("enter first variable");
let y=prompt("enter second variable");
var temp;
 temp=x;
x=y;
y= temp;
document.write( "after swapping x is " + x + " y is" +y);
document.write("<br>");

let kilometer =parseInt(prompt('enter the value in kilometer'));
const factor=0.621371;
const miles= kilometer* factor;
document.write( kilometer + "kilometers is equal to" + miles + "mile");
document.write("<br>");

let cTemp =parseInt(prompt('enter the temprature in degree '));
const farren=cTemp* 9/5 +32;
document.write("temp in farren heat is"+ farren );
document.write("<br>");

var r =parseInt(prompt('enter the radius'));
const area1 = 3.14 * r^2;
document.write( "area of circle is " + area1);
document.write("<br>");


// function detail(){
// let name=prompt("enter your name");

// let place=prompt("enter your place");
// let age=prompt("enter your age");
// }
// console.log(detail)
  var user= "lamiya";
  var place="kakkodi";
  var age= 21;
console.log(user);
console.log(place);
console.log(age);