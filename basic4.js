function quadractic(){

let root1, root2;


let a = document.getElementById("id1").value;
let b = document.getElementById("id2").value;
let c = document.getElementById("id3").value;


let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

   document.getElementById("result").innerHTML=`The roots of quadratic equation ${root1}+ and +${root2}`;
    // console.log("The roots of quadratic equation are" + root1 +"and " + root2);
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    document.getElementById("result").innerHTML=`The roots of quadratic equation ${root1}+ and +${root2}`;
    // console.log("The roots of quadratic equation are" + root1 +"and " + root2);
    
    
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    document.getElementById("result").innerHTML=`The roots of quadratic equation ${realPart}+ and +${imagPart}`;
    // console.log("The roots of quadratic equation are" + realPart +"and " + imagPart);

}
}

function positive(){
    let a = document.getElementById("id4").value;
    if(a>0){
        document.getElementById("result1").innerHTML=`The number is positive`;
    }
    else if(a==0){
        document.getElementById("result1").innerHTML=`The number is zero `;
    }
    else{
        document.getElementById("result1").innerHTML=`The number is negetive`;
    }
}
function oddeven(){
    let a = document.getElementById("id5").value;
for( var i=0;i<16;i++){
  if(a%2===0){
    document.getElementById("result2").innerHTML=`The number is even `;
  }
  else{
    document.getElementById("result2").innerHTML=`The number is odd `;
  }
  break;
}
}
function largest(){
 
let largest;

let a = document.getElementById("id6").value;
let b = document.getElementById("id7").value;
let c = document.getElementById("id8").value;

if(a >= b && a >= c) {
    largest = a;
}
else if (b >= a && b >= c) {
    largest = b;
}
else {
    largest = c;
}

document.getElementById("result3").innerHTML=`The largest number is ${largest} `;
  }

  function prime(first)
{
    
  if (first==1 )
  {
    
    document.getElementById("result4").innerHTML=`is not prime `;
  }
  else if(first=== 2)
  {
    document.getElementById("result4").innerHTML=`is  prime `;
  }else
  {
    for(var i = 2; i < first; i++)
    {
      if(first % i === 0)
      {
        document.getElementById("result4").innerHTML=`is not prime `; 
        
      }
    }
    document.getElementById("result4").innerHTML=`is prime `;  
    
  }
}console.log(prime( document.getElementById("id9").value));


 function allprime(){
    let lowerNumber = document.getElementById("id10").value;
    let higherNumber = document.getElementById("id11").value;
    document.getElementById("result5").innerHTML=`The prime numbers between ${lowerNumber} and ${higherNumber} are:  `;


for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

   
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            document.getElementById("result5").innerHTML=`${i}`;
            break;
        }
    }

  
    if (i > 1 && flag == 0) {
        console.log((i));
    }
}
 }
 function factorial(){
  let a = document.getElementById("id12").value;
  
   var fact = 1
  
  if(a < 0) {
  document.getElementById("result6").innerHTML=`Sorry, factorial does not exist for negative numbers`;}
  else if(a === 0) {
  document.getElementById("result6").innerHTML=`The factorial of 0 is 1`;}
  else{
     for( var i=1 ;i<=a;i++){
         fact = fact*i;
         document.getElementById("result6").innerHTML=`The factorial of ${a} is  ${fact}`;
        }
      }
    }
    
    function multiple(){
      var table = 9;
var length = 10;
var i = 1;
// ("Multiplication table: "+ table);
for(i = 1; i <= length; i++){
document.getElementById("result7").innerHTML="<br>"+` ${i} * ${table} =  ${i * table}`;    
        }
      }


  function fibno(){
   var number = document.getElementById("id14").value;
let n1 = 0, n2 = 1, nextTerm;

document.getElementById("result8").innerHTML=`Fibonacci Series:`;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    document.getElementById("result8").innerHTML=`${n1}`;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
  }
  function amstrong(){
  let sum = 0;
  var number = document.getElementById("id15").value;


let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    
    temp = parseInt(temp / 10); 
}
if (sum == number) {
  document.getElementById("result9").innerHTML=  `${number} is an Armstrong number`;
}
else {
  document.getElementById("result9").innerHTML=`${number} is not an Armstrong number.`;
    }}

    function amstrongran() {
      let lowNumber = document.getElementById("id16").value;
let highNumber = document.getElementById("id17").value;
      
document.getElementById("result10").innerHTML=`Armstrong Numbers:`;
      
    
      for (let i = lowNumber; i <= highNumber; i++) {
          let numberOfDigits = i.toString().length;
          let sum = 0;
          let temp = i;
          while (temp > 0) {
              let remainder = temp % 10;
              sum += remainder ** numberOfDigits;
              temp = parseInt(temp / 10);
          }
       
          if (sum == i) {
            document.getElementById("result10").innerHTML=`${i}`;
          }
      }
      
    }
    function simple(){
let operator = document.getElementById("id18").value;
let number1= Number(document.getElementById("id19").value);

let number2= Number(document.getElementById("id20").value);



let result11;


if (operator == '+') {
  result11 = number1 + number2;
}
else if (operator == '-') {
    result11 = number1 - number2;
}
else if (operator == '*') {
    result11 = number1 * number2;
}
else {
    result11 = number1 / number2;
}

document.getElementById("result11").innerHTML=`${number1} ${operator} ${number2} = ${result11}`;}

 function sum(){
  let number = Number(document.getElementById("id22").value);
  let sum = 0;
  
  
  for (let i = 1; i <= number; i++) {
      sum += i;
  }
  
  document.getElementById("result12").innerHTML=`The sum of natural numbers: ${sum}`;
 }

 function same(){
  let number1 = Number(document.getElementById("id23").value);
  let number2 = Number(document.getElementById("id24").value);
  let number3 = Number(document.getElementById("id25").value);
  
  
  const a = number1 % 10;
  const b =  number2 % 10;
  const c=  number3 % 10;
  
  
  
  if(a == b && a == c) {
    document.getElementById("result16").innerHTML=  `${ number1}, ${ number2} and ${ number3} have the same last digit.`;
  }
  else {
    document.getElementById("result16").innerHTML=`${ number1}, ${ number2} and ${ number3} have different last digit.`;
  }
 }

 function factor(){
  let numb = Number(document.getElementById("id26").value);
  document.getElementById("result17").innerHTML=`The factors of ${numb} is:`;
  
  
  for(let i = 1; i <= numb; i++) {
  
      
      if(numb % i == 0) {
          
          console.log(document.getElementById("result17").innerHTML=`${i}`);
      }
  }
 }