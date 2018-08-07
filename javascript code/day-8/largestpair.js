var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var arr=[];
var count=0;
var a,b;
y.question('Enter size of array',function(size)
{
    console.log('enter elements in array');
    readarray(size);    
});
function readarray(size)
{
    y.question('',function(store)
{
    store=parseInt(store);
    arr.push(store);
    if(count<size-1)
    {
        count++;
        readarray(size);
    }
    else
    {
        console.log(arr);
       console.log('largest pair of elements are:');
       largestpair();
    }
});
}
function largestpair()
{
     a=arr[0],
     b=arr[1];
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]*arr[j]>a*b)
            {
                a=arr[i];
                b=arr[j];
            }
        }
    }
    console.log('{'+a+','+b+'}');
}