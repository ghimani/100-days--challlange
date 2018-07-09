var arr=new Array(3);
var arr1=new Array(3);
for(var i=0;i<3;i++)
{
    arr[i]=new Array(3);
    arr1[i]=new Array(3);
}

arr[0][0]=1;arr[0][1]=2;arr[0][2]=3;
arr[1][0]=4;arr[1][1]=5;arr[1][2]=6;
arr[2][0]=7;arr[2][1]=8;arr[2][2]=9;

console.log(arr);

for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        arr1[i][j]=arr[j][i];
        }
}
console.log(arr);
console.log(arr1);