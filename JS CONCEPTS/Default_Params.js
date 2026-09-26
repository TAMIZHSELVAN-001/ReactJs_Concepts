function user(name="Guest"){
    console.log("Hello",name)
}
user(undefined)
user()//this shows the default value 
user("")//this shows empty
user(null)//this shows null