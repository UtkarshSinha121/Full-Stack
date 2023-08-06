
function addNums(a,b){
     var c=a+b;
    console.log(c);
};

addNums(123,234);
addNums(1234,3455);

//console.log(c);

const getPercentage = function(m1,m2,m3,m4,m5){
     var total =(m1+m2+m3+m4+m5)/5;
     console.log(total, '%');

}
getPercentage(34,45,56,67,78);

//new in ES6
const getFact = (num) => {
    let f=1;
    for(let i=1;i<=num;i++){
        f *= 1;
    };
    console.log(f);
    return f;
}
const result = getFact(5);
console.log(result);
