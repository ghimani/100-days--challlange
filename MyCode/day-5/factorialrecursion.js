var fact=1;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter number whose factorial you want to calculate',function(num){
var result=factorial(num);
console.log(result);
});
function factorial(num){
    if(num==0){
        return 1;
    }
    else{
        return num*factorial(num-1);
       
    }
}