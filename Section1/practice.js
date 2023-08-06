//1.print all perfect square in range of 50-350
for(let i=50;i<=350;i++){
    sqrt=i**0.5;
    if(sqrt=== parseInt(sqrt)){
        console.log(i);
    }
}
console.log('--------------------------------------------------------');
//2.convert Celsius to Fahrenheit and vise versa
let C=100;
console.log(C+' Celcius is equal to '+((C*(9/5))+32)+' Fahrenheit ');

let F=212;
console.log(F+' Fahrenheit is equal to '+((F-32)*5/9)+' Celcius ');
console.log(`${F} Fahrenheit is equal to ${((F-32)*5/9)} Celcius`);

console.log('--------------------------------------------------------');
//3.Check if number if palindrome.
let num =1331;
let num1 =num;
let reverse = 0;
while(num>0){
    let d= num%10;
    reverse = reverse*10 + d;
    num = parseInt(num/10);
}
    if(reverse===num1){
    console.log(num1+' is Palindrome ');
    }
    else{
        console.log(num1+' is not Palindrome ');
    }
    //methed2
    let [a, b] = [1, 0];
    console.log(`${a}\n${b}`);
    while(a+b<100){
        let sum = a+b;
        console.log()
        [a,b]=[b,sum];
    }

    console.log('--------------------------------------------------------');
//4.print sum of all digits of number
let n=12345;
let sum=0;
while(n>0){
    let a = n%10;
     sum = sum+a; 
     n = parseInt(n/10); 
} console.log(sum);

console.log('--------------------------------------------------------');
//5.print Fibonacci series
let len=10;
let n1=0;
let n2=1;
console.log(n1);
console.log(n2);

for(let i=2;i<len;i++){
    let t=n1+n2;
    console.log(t);
    n1=n2;
    n2=t;
}







