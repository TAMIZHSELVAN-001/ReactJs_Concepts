const Product=[{id:1,name:"Vivo",price:20000},
    {id:2,name:"Samsung",price:25000},
    {id:3,name:"Oppo",price:30000},
    {id:4,name:"Redmi",price:15000},
    {id:5,name:"Poco",price:17000},
    {id:6,name:"Realme",price:19000}]

const FilterProduct=Product.filter((product)=>{
    return product.price>20000
})
// //To show the filter products name using .map()
.map((product)=>product.name)
console.log(FilterProduct);

// //Filter product names using includes()
// //Suppose the user searches:

const search="sam"

const result=Product.filter((product)=>{
    return product.name.toLowerCase().includes(search.toLowerCase());
})
console.log(result)
// //It returns the result in Array

// //Filter Active Users
const users1 = [
  { name: "Selvan", active: true },
  { name: "Arun", active: false },
  { name: "Kumar", active: true }
];

const activeUsers=users1.filter((user)=>{
    return user.active
})
//shorter method to get active users
users1.filter(user => user.active);

// to using some() to get atleast one active user
users1.some(user=>user.active);

//to using every() to check all users are active if anyone is inActive to return false
users1.every(user=>user.active);

console.log(activeUsers);

//Remove the Duplicate values
const users2 = [
  { name: "Selvan", active: true },
  { name: "Arun", active: false },
  { name: "Kumar", active: true },
  { name: "Kumar", active: true },  
];

const unique=users2.filter((user,index)=>{
    return users2.findIndex(item=>item.name===user.name)===index;
})

console.log(unique)