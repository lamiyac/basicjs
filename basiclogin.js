

function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
	   return true;      
	 }
   else
     {
      document.getElementById("result111").innerHTML=`Not a valid Phone Number`;
      
	   return false;
     }
}
function password(inputtxt)
{
  var passw= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(passw)) 
{ 
  let stro=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let med=new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  if(stro.test(passw)){
      document.getElementById("result44").style.color="green";
      document.getElementById("result44").innerHTML="strong password;"
  }
  else if(med.test(passw)){
    document.getElementById("result44").style.color="yellow";
    document.getElementById("result44").innerHTML="medium password;"
  }else{
    document.getElementById("result44").style.color="red"
    document.getElementById("result44").innerHTML="weak password;"
  }
}}



function ValidateEmail(inputtext) 
{
    var ema=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (inputtext.value.match(ema))
  {
    document.getElementById("result334").innerHTML=`You have entered an valid email address!`;
    return true;
  }
  document.getElementById("result334").innerHTML=`You have entered an invalid email address!`;
    return false;
}



