//LocalStorage_Crud Operations

//Store Data Using SetItem
localStorage.setItem("name:","Tamizh")
localStorage.setItem("age:","21")

//Read the Data using getItem
const data =localStorage.getItem("name:");
//use typeof to find the data type
console.log(typeof data)

const age=localStorage.getItem("age:")
console.log(age)

localStorage.setItem("name:","Selvan")
//Delete the data using removeItem()and clear()
localStorage.removeItem("age:")

//Storing an Object using JSON.stringify()
const user={
    Name:"Tamizhselvan",
    age:"21"
}

localStorage.setItem("user",JSON.stringify(user))

//read the object using JSON.parse
const data=JSON.parse(localStorage.getItem("user"));
console.log(data.Name);
console.log(data.age);
data.age=24;
data.Name="Tamizhselvan A";
data.id=1;

//Update an Object
localStorage.setItem("user",JSON.stringify(data))

//Delete an object
delete data.age;
localStorage.setItem("user",JSON.stringify(data))
console.log(data);

//Store data Using Array
const users=[{
    id:1,Name:"Tamizh",
},{id:2,Name:"Selva"}];

localStorage.setItem("users",JSON.stringify(users));

//To add data in Array using this Array methods
const students=JSON.parse(localStorage.getItem(user))||[];

students.push({
    id:3,Name:"Ram"
})
localStorage.setItem("Students",JSON.stringify(students))

const user= users.find(u=>u.id===2);
user.Name="ram";
console.log(user);

//Note That: The Same Procedure is SessionStorage

//cookie Storage using CRUD Operations

//Create Cookies
document.cookie = "name=Tamizh";

//Read Cookie
console.log(document.cookie);

//Update a Cookie
document.cookie = "name=Selvan";

//Delete a Cookie using to set "Max-Age=0"
document.cookie = "name=Tamizh; Max-Age=0; path=/";
//Cookie with an expiration Date using "Max-Age"
document.cookie = "name=Tamizh; Max-Age=3; path=/";
