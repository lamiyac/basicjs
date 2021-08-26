
// let n=5;
var arr= [3,5,6,7,10];
var first=arr[0];
document.write(first);

function test_prime(first)
{

  if (first==1 )
  {
    return  document.write("is not prime");
  }
  else if(first=== 2)
  {
    return document.write("is prime");
  }else
  {
    for(var i = 2; i < first; i++)
    {
      if(first % i === 0)
      {
        return  document.write("is not prime");  
        
      }
    }
    return  document.write("is prime");  
    
  }
}

console.log(test_prime(first));
document.write("<br>");document.write("<br>");


var arr1 = [3, 1, 1, 1, 2, 3, 1, 3, 1, 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}
document.write(item+"is the most freq item");
alert(item + " ( " + mf + " times ) ");
document.write("<br>");


var str=prompt("enter a string");
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
document.write(result.join(''));
document.write("<br>");


var num1 =parseInt(prompt('enter the number'));
for( var i=0;i<16;i++){
  if(num1%2===0){
    document.write("number is even");
  }
  else{
    document.write("number is odd");
  }
  break;
}
document.write("<br>");

var length = 3;
var myString =prompt("enter your string");
var myTruncatedString = myString.substring(0,length);

document.write("truncated string is "+ myTruncatedString);
document.write("<br>");

var num2 =parseInt(prompt('enter the  first number'));
var num3 =parseInt(prompt('enter the  second number'));
 if(num2>num3){
  document.write("largest num is" + num2);
 }
 else{
  document.write(" largest num is"+ num3);
 }
 
 document.write("<br>");



const string = prompt('Enter an array: ');


const words = string.split(' ');


const z=words.sort();
document.write(" sorted array are : "+ z);



for (const element of words) {
  console.log(element);
}
document.write("<br>");

var str="javascript";
for( var i=0;i<=9;i++)
{
    for( var j=0;j<=i;j++)  
    {
        document.write("&nbsp"+ str[j]);
    }
    document.write("\n");
    document.write("<br>");
}
document.write("<br>");




function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
document.write(sum_sq([0,1,2,3,4])); 
