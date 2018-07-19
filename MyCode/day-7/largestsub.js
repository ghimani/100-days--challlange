var array=[2, 5, 7, 0, 1, 3, 4, 8, 9];
console.log(array);
var arr=array.sort();
var store=[];
var size=arr.length;
for(var i=0;i<size-1;i++)
{
    if((arr[i]+1)!=arr[i+1])
    {
         break;
    }
    store.push(arr[i]);
}
console.log(store);