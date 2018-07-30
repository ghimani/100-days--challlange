var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var arr=[];
var count=0;
var temp;
y.question('Enter size of an array',function(size)
{
    console.log(size);
    console.log('Enter an array ');
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
         largest();
     } 
});
}
function largest()
{
    n=arr.length;
    for(var i=0;i<n;i++)
    {
        for(var j=i+1;j<n;j++)
        {
            if(arr[i]<arr[j])
            {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            }
        }
    }
    console.log('largest two numbers:-'+arr[0]+' and '+arr[1]);
}
