

function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}
function password(inputtxt)
{
  var passw= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}}
$scope.analyze=function passwordstr(inputtxt) {
var med=/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})$/;
var strong=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;

    if(inputtxt.value.match(strong)) {
        $scope.passwordstr["background-color"] = "green";
    } else if(inputtxt.value.match(med)) {
     $scope.passwordStrength["background-color"] = "orange";
    } else {
        $scope.passwordstr["background-color"] = "red";
    }
}

function ValidateEmail(inputtext) 
{
    var ema=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (inputtext.value.match(ema))
  {
    return true;
  }
    alert("You have entered an invalid email address!")
    return false;
}
