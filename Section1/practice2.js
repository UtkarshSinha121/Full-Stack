//Q1 filter numbers in array which are not perfect square
const sqr = [4, 8, 16, 32, 64, 128, 256]
 const notperfectsqrt = sqr.filter((n) => { return (n**0.5 != parseInt(n**0.5))});
 console.log(notperfectsqrt);

 //Q2 filter name with length greater than 5 in array
 const names =['Visesh', 'Nirbhay', 'Yash', 'Shashi', 'Pradeep', 'Vyom', 'Vinay', 'Vibhash']

 const snames = names.filter((i) =>{return (i.length > 5)})
 console.log(snames);

 //Q3 use map to keep only first name in arry of full name
 const fullnames=['Visesh Singh', 'Nirbhay Singh', 'Yash Vardhan', 'Shashi Gupta', 'Vyom Tiwari', 'Vinay Kumar']
 const firstnames = fullnames.map((f) =>{return f.split(" ")[0] })
 console.log(firstnames);

 //Q4 function to print all prime numbers in given range
const isprime = (n,m) =>{
    for(let i=n;i<m;i++){
        let flag=0;
        for(j=2;j<i;j++){
           if(i%j == 0){
            flag=1;
            break;
           }          }
        if(flag==0)
           console.log(i);}
        } 
isprime(2,30);
