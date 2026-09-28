const Product=[{id:1,name:"Vivo",price:20000},
    {id:2,name:"Samsung",price:25000},
    {id:3,name:"Oppo",price:30000},
    {id:4,name:"Redmi",price:15000},
    {id:5,name:"Poco",price:17000},
    {id:6,name:"Realme",price:19000}]

    console.log(Product)
//UpperCase
const UpperCase=Product.map((product)=>{
  return product.name.toUpperCase()})
console.log(UpperCase)

//LowerCase
const LowerCase=Product.map((product)=>{
  return product.name.toLowerCase()})
console.log(LowerCase)

//camelCase
const camelCase=Product.map((product,index)=>{
  if(index===0){
    return product.name.toLowerCase()
  }

    return product.name.charAt(0).toUpperCase()+product.name.slice(1).toLowerCase()
})
.join("");

console.log(camelCase)

