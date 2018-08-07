var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var arr=[];
y.question('Enter a number',function(number)
{
    var i=0;
    while(number>0)
    {
        arr[i]=number%8;
        number=number/8;
        number=parseInt(number);
        i++;
    }
    for(var j=arr.length-1;j>=0;j--)
    {
        console.log(arr[j]);
    }
});

