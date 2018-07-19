var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var arr=[];
var counter=0;
y.question('Enter size of array',function(size)
{
    console.log('Enter elements in array');
    readarray(size);
});
function readarray(size)
{
    y.question('',function(ele)
{
    ele=parseInt(ele);
    arr.push(ele);
    if(counter<size-1)
    {
        counter++;
        readarray(size);
    }
    else
    {
        console.log(arr);
        console.log('repeated elements are:');
        elementcount();

    }
              
});
}
function elementcount()
{
    for(var i=0;i<arr.length;i++)
    for(var j=i;j<arr.length;j++)
    {
        if(arr[i]==arr[j+1])
        {
            console.log(arr[i]);
        }
    }
}