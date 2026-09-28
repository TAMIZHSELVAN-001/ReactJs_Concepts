const productpromise=new Promise((resolve,reject)=>{
    const success=false;

    if(success){
        resolve([
            { id: 1, name: "Vivo", price: 20000 },
            { id: 2, name: "Samsung", price: 25000 }
        ])
    }
    else{
        reject("Failed to get Products")
    }
});

productpromise.then(product=>{
    console.log(product)
})
.catch(error=>{
    console.log(error)
});