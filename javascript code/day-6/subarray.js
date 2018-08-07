var array=[-3,2,-2,3,6];
var sum=0;
var subArr=[];
for(var i=0;i<array.length;i++)
{
    sum+=array[i];
    subArr.push(array[i]);
    if(sum==0 || array[i]==0)
    {
       console.log(subArr);
    }
}

