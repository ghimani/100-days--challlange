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
         console.log('Here every odd index element is large than its left and right:-');
         oddelement();
     } 
});
}
function oddelement()
{
    for(var i=1;i<arr.length-1;i+=2)
    {
        if(arr[i]<arr[i-1])
        {
            temp=arr[i];
            arr[i]=arr[i-1];
            arr[i-1]=temp;
        }
        if(arr[i]<arr[i+1])
        {
           temp=arr[i];
           arr[i]=arr[i+1];
           arr[i+1]=temp;
        }
    }
    console.log(arr);
}