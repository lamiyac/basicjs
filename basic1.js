// var a=10;
// console.log(a);

for( var i=0;i<3;i++)
{
    for( var j=0;j<3;j++)  
    {
        document.write("*");
    }
    document.write("\n");
    document.write("<br>");
}

for( var i=0;i<=4;i++)
{
    for( var j=0;j<=i;j++)  
    {
        document.write("&nbsp*");
    }
    document.write("\n");
    document.write("<br>");
}



for( var i=0;i<=8;i++)
{
    for(var k=0;k<=(8-i);k++)
    {
        document.write("&nbsp");
    }
    for( var j=0;j<=i;j++)  
    {
        document.write("&nbsp*");
    }
    document.write("\n");
    document.write("<br>");
}
document.write("<br>");


for( var i=0;i<=8;i++)
{
    for( var j=0;j<=i;j++)  
    {
        document.write("&nbsp");
    }
    for( var j=0;j<=(8-i);j++)  
    {
        document.write("&nbsp*");
    }

    document.write("\n");
    document.write("<br>");
}

for( var i=0;i<=4;i++)
{
    for( var j=0;j<=(4-i);j++)  
    {
        document.write("&nbsp*");
    }
   
    document.write("\n");
    document.write("<br>");
}


for( var i=0;i<=4;i++)
{
    for( var j=0;j<=(4-i);j++)  
    {
        document.write("&nbsp&nbsp&nbsp");
    }
    for( var j=0;j<=i;j++)  
    {
        document.write("&nbsp*");
    }
   
    document.write("\n");
    document.write("<br>");
}
document.write("<br>");
 
var n=5;
for( var i=0;i<=n;i++)

{
    
    
    for( var j=0;j<=i;j++)  
    {
        document.write("&nbsp&nbsp&nbsp");
    }
    for( var j=(n-1);j>=i;j--)  
    {
        document.write("&nbsp*");
    }
   
    document.write("\n");
    document.write("<br>");
}
document.write("<br>");
 

