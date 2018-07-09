var ci;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter prinicple investment amount',function(princ){
    prompts.question('Enter rate of interest',function(rate){
        prompts.question('ENter the number of compounded period for a year',function(num){
           rate=1+parseFloat(rate);
            rate=Math.pow(rate,num);
        ci=(princ*(rate-1));
        console.log('compound interest is:'+ ci);
        })

    })