//Calculate total stock using reduce()
const products = [
  { id: 1, name: "Vivo", stock: 10 },
  { id: 2, name: "Samsung", stock: 20 },
  { id: 3, name: "Oppo", stock: 15 },
  { id: 4, name: "Redmi", stock: 25 }
];

const totalStock=products.reduce((total,product)=>{
    return total+product.stock;
},0);

//To find productID using find()
const findProductID=products.find(product=>product.id===1);

console.log(findProductID)