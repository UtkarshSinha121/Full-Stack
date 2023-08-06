for(let i=0;i<10;i++){
    console.log(i);
};
console.log('--------------');
for(let i=10;i>0;i-=2){
    console.log(i);
};
console.log('--------------');
 let m=35;
 let prime = true;
for(let i=2;i<m;i++){
    if(m%i === 0){
        console.log('not prime');
        prime = false;
        break;
    }
}
if(prime) console.log('prime');
console.log('--------------');
for(let i=100;i<=500;i++){
    if(i%7==0 && i%11==0){
        console.log(i);
    }
}
console.log('--------------');
m=81;
for(let i=0;i<m/2;i++){
    if(i*i==m){
        console.log("perfectSquare");
    }
   
}
console.log('--------------');
console.log(25**0.5);
console.log(25**0.5 === parseInt(25**0.5));
let n=25;
let sqrt = n**0.5;
if(sqrt === parseInt(sqrt)){
    console.log('perfect Square');
}
else{
    console.log('not perfect Square');
}
console.log('--------------');
p=10;
while(p>0){
    console.log(p);
    p--;
}
console.log('--------------');
q=10;
do{
    console.log(q);
    q--;
}while(q>0);
console.log('--------------');
let num1 =376574;
let reverse = 0;
while(num1>0){
    let d= num1%10;
    reverse = reverse*10 + d;
    num1 = parseInt(num1/10);
}
console.log(reverse);