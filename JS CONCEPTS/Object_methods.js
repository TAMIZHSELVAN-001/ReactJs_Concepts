// const Product={
//     name:"Laptop",
//     price:"50000",
//     stock:4
// };
// const details={
//     stock:4,
//     category:"Electronics"
// }
// console.log(Object.keys(Product))//it shows only keys
// console.log(Object.values(Product))//it shows only values
// console.log(Object.entries(Product));//it shows both keys and values
// console.log(Object.hasOwn(Product,"name"))//This checks whether an object contains a particular property.
// console.log(Object.assign(Product,details))
// console.log(Product)

// const updatedProduct = Object.assign(
//   {},
//   Product,
//   { price: 60000 }
// );
// console.log(updatedProduct)


//real world task

const product = {
  name: "Laptop",
  price: 50000,
  stock: 5
};
//we Want name and price only

//step-1
console.log(Object.entries(product))
//use the filters in the entries
const result=Object.fromEntries(Object.entries(product).filter(([key])=>{
    return key==="name"||key==="price"; 
}))

console.log(result)