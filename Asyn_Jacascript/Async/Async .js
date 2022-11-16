console.log('person1: shows ticket')
console.log('person2: shows ticket')

const preMovie=async ()=>{
    const wifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Ticket'),3000)
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const addButter=new Promise((resolve,reject)=>resolve(`butter`));
    const getColdDrinks =new Promise((resolve,reject)=>resolve(`ColdDrinks`));
let ticket=await wifeBringingTicks;

console.log('Wife : I have tickets');
console.log('Husband : We should go in');
console.log('wife : No im hungry')

let butter=await addButter;

console.log('Husband : I got Popcorn');
console.log('Husband : We should go in');
console.log('wife : No i need butter')

let popcorn=await getPopcorn;

console.log('Husband : butter is added');
console.log('Husband : Anything else?');
console.log('wife : No Thanks')

let ColdDrinks=await getColdDrinks;

console.log('Husband : I need cold drinks');
console.log('wife : We should go in');
console.log('Husband : No i need cold drinks')
console.log('wife : I got cold drinks')
return ticket
}
preMovie().then((m)=>console.log(`person3 : shows${m}`));
console.log('person4: shows ticket')
console.log('person5: shows ticket')