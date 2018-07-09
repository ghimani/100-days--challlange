const readline = require('readline');
var arr=[];
var arr2=[];
var arr3=[];
function Addition(){
   
    var crypto = require('crypto');
    crypto.randomBytes(3, function(err, buffer) {
    var num1= parseInt(buffer.toString('hex'), 16).toString().substr(0,6);
    //randomarray1(num1);
    crypto.randomBytes(3, function(err, buffer) {
        var  num2= parseInt(buffer.toString('hex'), 16).toString().substr(0,6);
        randomarray1(num1,num2);
});
    });

      
    

    //console.log(addnum);
  // randomarray1();
    //randomarray2();
  //  Add();
}

function sub(){
    var crypto = require('crypto');
    crypto.randomBytes(3, function(err, buffer) {
    var num1= parseInt(buffer.toString('hex'), 16).toString().substr(0,6);
    //randomarray1(num1);
    crypto.randomBytes(3, function(err, buffer) {
        var  num2= parseInt(buffer.toString('hex'), 16).toString().substr(0,6);
        randomarray2(num1,num2);
});
    });

}


function randomarray2(num1,num2){
    
    arr.push(parseInt(num1));
    arr2.push(parseInt(num2));
    arr.sort();
arr2.sort();
    console.log(arr);
console.log(arr2);
//var n=arr.values(0);    
//console.log(n);   
var a=arr.pop(1);
var b=arr2.pop(1);

arr3.push(parseInt(b));
arr3.push(parseInt(a));

var d=arr.pop(1);
var e=arr2.pop(1)
var c=a-b;
console.log('\t'+a);
console.log('-\t'+b);
console.log('---------------');
const r2 = readline.createInterface({
input: process.stdin,
output: process.stdout
});
r2.question(' ', (answers) => {
if (answers==c){
console.log('Your Ans IS Correct');
console.log('---------------');
r2.question('For Continue Press 1 ', (answers) => {
  var ans='1';
    if(answers==ans){
        sub();
    }
    else r2.close();
});
}
else if (answers!=c){
console.log('---------------\t'+'Your Ans IS Wrong'); 
console.log('Correct Ans IS\t'+ c);
r2.question('For Continue Press 1 ', (answers) => {
    var ans='1';
      if(answers==ans){
          sub();
      }
      else r2.close();
  });
}
});
//console.log( '\t'+ c);

}


//console.log(num);

function randomarray1(num1,num2){
    
        arr.push(parseInt(num1));
        arr2.push(parseInt(num2));
        arr.sort();
arr2.sort();
        console.log(arr);
    console.log(arr2);
    //var n=arr.values(0);    
//console.log(n);   
var a=arr.pop(1);
var b=arr2.pop(1);
var c=a+b;
console.log('\t'+a);
console.log('+\t'+b);
console.log('---------------');
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  r2.question(' ', (answers) => {
if (answers==c){
    console.log('Your Ans IS Correct');
    console.log('---------------');
    r2.question('For Continue Press 1 ' , (answers) => {
        var ans='1';
          if(answers==ans){
              Addition();
           }
           else r2.close();
      });
    }
    

else if (answers!=c){
    console.log('---------------\t'+'Your Ans IS Wrong'); 
    console.log('Correct Ans IS\t'+ c);
    r2.question('For Continue Press y ', (answers) => {
        var ans='1';
          if(answers=='y'){
              Addition();
          }
          else r2.close();
      });
}
});
//console.log( '\t'+ c);

}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('What Do you Solve first in these following type of problems');
rl.question(' 1. Addition of two numbers \n' + ' 2. subtract of two numbers\n', (answer) => {
if(answer==1){
    console.log('you choose Addition');
Addition();
}
else if(answer==2){
    console.log('you choose subtract');
    sub();
}

else{
    console.log('Please chosse correct options');
}
    //console.log('you chosse addition', answer);
  rl.close();
});