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
       console.log('Sorting of array is:');
       sorting();
    }
});
}
function sorting()
{
    var sorted=arr.sort();
    console.log(sorted);
    search();
}
function search()
{   
    var value=parseInt(value);
    var firstindex=0;
    var lastindex=arr.length-1;
    var middleindex=Math.floor((firstindex+lastindex)/2);
    y.question('Enter value which you want to search:',function(value)
{
    while(arr[middleindex]!=value)
    {
        if(value<arr[middleindex])
        {
               lastindex=middleindex-1; 
        }
        else if(value>arr[middleindex])
        {
            firstindex=middleindex+1;
        }
        middleindex=Math.floor((firstindex+lastindex)/2);
    } 
    console.log('Search value position is:'+middleindex);
});
}