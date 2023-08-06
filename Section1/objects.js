const user = {
    name : 'Utkarsh',
    email : 'utkarsh@gmail.com',
    password : '121'

};
console.log(user.email);
console.log(typeof user);
console.log(user['name']);
user.address = 'Lucknow';
console.log(user);
user.password = '0121'
console.log(user);

for(let k  of Object.keys(user)){
    console.log(k);
}
for(let k  of Object.values(user)){
    console.log(k);
}
for(let k  of Object.entries(user)){
    console.log(k);
}


const laptop =[
    { brand: 'HP', model: 'pavilion', price: 69999, colors: ['black','silver']},
    { brand: 'Lenevo', model: 'thinkpad', price: 56000, colors: ['black']},
    { brand: 'HP', model: 'Elitebook', price: 68000, colors: ['blue']},
    { brand: 'Asus', model: 'Ultrabook', price: 89999, colors: ['silver','black','white']},

];
// get price of ultrabook
console.log(laptop[3].price);
// replace siler to gray in ultrabook
laptop[3].colors[0]= 'gray';
console.log(laptop);
//print brand of all laptop
for(let k of laptop){
    console.log(k.brand);
}
//filter laptop having price less than 70000
const lap = laptop.filter((p)=>{return p.price<70000});
console.log(lap);

// filter lapop having black color
const col = laptop.filter((c)=>{return c.colors.includes('black')});
console.log(col);
