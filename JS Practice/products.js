const products = [
  { id: 1, name: "Vivo", stock: 10, price:30000},
  { id: 2, name: "Samsung", stock: 20, price:35000  },
  { id: 3, name: "Oppo", stock: 15, price:25000},
  { id: 4, name: "Redmi", stock: 25, price:20000 }
];

// Check whether any product is out of stock
const outOfStock=products.some(product=>product.stock===0)

console.log(outOfStock);

//Check whether every product has stock above zero
const AboveZero=products.every(product=>product.stock>=0)

console.log(AboveZero);

//Check whether every product has stock below zero
const BelowZero=products.every(product=>product.stock<=0)

console.log(BelowZero)

//Sort products by price from low to high
const price_LowToHigh=products.sort((a,b)=>a.price-b.price)
console.log(price_LowToHigh);

//Sort products by price from low to high
const price_HighToLow=products.sort((a,b)=>b.price-a.price)
console.log(price_HighToLow);

//Update one product's price using the spread operator

const update_price=products.map((product)=>{
    if(product.id===1){
        return{
            ...product,
            price:32000
        }
    }
    return product
})

console.log(update_price);

function calculateDiscount(price){
    if(price>=30000){
        return price*0.20
    }
    else if(price>=20000){
        return price*0.10
    }
    else{
        return price*0.05
    }
}

console.log(calculateDiscount(30000))

let totalInventoryValue=0;

for(const product of products){
    totalInventoryValue+=product.price*product.stock;
}

console.log(totalInventoryValue);
