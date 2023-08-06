const myarr = [235, 'nice', 73.234, true, console.log, [23, 34]];
console.log(myarr.length);
console.log(typeof myarr);

const movies =['OMG', 'Avengers', 'Flash', 'Pushpa', 'War','Jawan'];
//Indexing
console.log(movies[2]);
console.log(movies.at(-2));
console.log(movies.indexOf('Flash'));

//Slicing
console.log(movies.slice(2,5));
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice());

//adding new element
movies.push('Shershaah');
movies.unshift('Avatar');
console.log(movies);

//removing element
movies.pop();
movies.shift();
console.log(movies);

movies.splice(3,2);
console.log(movies);

//spread operator
console.log(...movies);
console.log([...movies]);
console.log([...movies, 'Batman','JohnWick', 'EndGame']);
console.log([...movies.slice(0,2),...movies.slice(3)]);

//WAP to print square of all numbers in array
const nums = [2, 4, 62, 6, 2, 8];
for(let i=0;i<nums.length;i++){
    console.log( nums[i]**2);
}
console.log('-------------------------------------------');
for(let n of nums){
    console.log(n**2);
    
}

const newNums = [];
for(let n of nums){
     //console.log(n**2);
     console.log(newNums);
     newNums.push(n**2);
}
console.log(newNums);

// using Map function
 const result = nums.map((n)=>{return n**2});
 console.log(result);

 //add 5% gst using map
 const prices = [1329, 38267, 4002, 402, 5793, 352]
 
 console.log(1329*0.05+1329);

 const newPrices = prices.map( (p) => {return p * 0.05 + p});
 console.log(newPrices);

 const prices2 = ['$2423.23', '$2344.54', '$4567.34', '$5687.56']

 const newprices2 = prices2.map( (c) => {return parseInt(c.slice(1))});
 console.log(newprices2);


 const filterprices = prices.filter((p) => {return p>=500 && p<5000});
 console.log(filterprices);

 const laptops = ['Dell vostro', 'Acer Predator', 'Asus Vivobook', 'Hp Pavloion']

 //console.log('Dell Vostro'.incluides('Dell'));

const keyword = 'Dell';
 const searchData = laptops.filter((tittle) => { return tittle.includes(keyword)});
 console.log(searchData);
 const searchData1 = laptops.filter((tittle) => {return  tittle.toLowerCase().includes(keyword.toLowerCase())});
 console.log(searchData);


       


