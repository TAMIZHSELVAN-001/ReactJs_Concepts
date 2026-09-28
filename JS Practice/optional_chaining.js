const customer = {
  name: "Selvan",
  address: {
    // city: "Chennai",
    pincode: 600001
  }
};
//Normal Chaining
// console.log(customer.address.city)

// //But what if address doesn't exist?
// console.log(customer.address.city);

//then Use optional chaining ?. to prevent the error    
console.log(customer.address?.city);

//Use ?? to provide a default stock value of zero

const product = {
  name: "Vivo",
  stock: null
};


//Nullish Coalescing
//to set default using ??
const stock=product.stock??0;

console.log(stock)