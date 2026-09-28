function discount(price){
    return price*0.9
}

console.log(discount(100))

function calculatePrice(price,callback){
    return callback(price)
}

const finalprice=calculatePrice(1000,discount)

console.log(finalprice);
