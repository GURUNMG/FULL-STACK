// var a=1/0;
// console.log(a);  // Infinity

// //strings
// const str="hello " + a+ " world";
// console.log("NORMAL ",str)
// const backtick=`guru
// bharan
// n m`

// // for backtick operator no need intendation..

// const b=`hello gurubharan n m ${a}`;
// console.log(b)

// // conditional statement in backtick

// // therefore a is infinity
// const condition=`hello ${ (a==0)? "BIT": "GURU"} world;`
// console.log(condition)


// // BigInt declaration
// big_a=10n;
// a=10;

// // console.log(typeof(big_a))  bigint
// // console.log(typeof(a)) int


// // null
// let n={};
// console.log(n); //just return empty obj

// //undefined ... the variable without definition
// let un=undefined;
// console.log(un)


// // object it is a collection of data
// const user={
//   name:"GURUBHARAN N M",
//   "first name":"GURU",
//   college:"BIT"
// }
// // only way of getting the first name
// console.log("GETTING first name:")
// console.log(user["first name"])
// console.log("printing the name present in user object",user.name)

// user["age"]=20;
// console.log(user)
// user.address="namakkal"
// console.log("inserted user address",user)

// // delete user address
// delete user.address;
// console.log("user address deleted ",user)


// // freeze an object

// const freeze_user=Object.freeze({
//   name:"GURUBHARAN N M",
//   "first name":"GURU",
//   college:"BIT"
// })

// console.log("freeze function in object")
// freeze_user.age=20;
// console.log(freeze_user)

// // get keys from an object;
// console.log("Keys in user object: ",Object.keys(user))
// // ger values from an object 
// console.log("Values in user object "+Object.values(user))

// // conver objects into 2d array

// const aa="g"
// console.log(typeof(aa))

// // function in obj
// const sum=(a,b)=>{
//   // at=
//   // bt=
//   if(typeof(a)=="string" || typeof(b)=="string") return "invalid number"
//   return a+b;
// }
// const hello={
//   name:"GURUBHARAN N M",
//   call:sum("1",2)
// }
// console.log(" " ,hello);


// // filter, find, findindex, slice, push, pop, shift, unshit


// var a=[1,2,3,4,5,6]

// var new_a=a.filter( (i) =>{
//   if(i>=0) return i;
// })

// // var new_a=a.fileter(i=>i>=0) short hand
// console.log("FILTER function in array: "+a)

// var find_positive=a.find(i=>(i>1));
// var f_positive=(i)=>{
//   if(i>1) return i
// }
// console.log("FIND THE NUMBER GREATER THAN 1: "+find_positive)
// console.log("SECOND TYPE CALL", a.find(f_positive))

// // index of the first even number...
// var find_index=a.findIndex(i=> i%2==0);
// // var f_index=i=>i%2==0
// console.log(find_index)
// // console.log(a.findIndex(f_index))

// const c=[1,2,3,4,5,6,7,8,9,10].map((i)=>i*5)
// console.log("MULTIPLE OF 5: ",c);
// // if a function accepts any function as a parameter then it is known as HIGHER ORDER FUNCTION
// const plus=(num1, num2)=> num1+num2;

// const calc=(num1,num2,callback)=>{
//   return callback(num1,num2)
// }

// console.log(calc(10,20,plus))

// const todo=[
//   {
//     id:1,
//     "titile":"work1",
//     completed:false
//   },
//   {
//     id:2,
//     "titile":"work2",
//     completed:false
//   },
//   {
//     id:3,
//     "titile":"work3",
//     completed:false
//   },
//   {
//     id:4,
//     "titile":"work4",
//     completed:false
//   },
//   {
//     id:5,
//     "titile":"work5",
//     completed:false
//   }
// ]

// new_obj=todo.map((ob)=>ob.titile)
// console.log(new_obj)

// find_obj=todo.find((i)=>i.id==3)
// console.log(find_obj)

// todo.push({
//   id:6,
//   "titile":"work6",
//   completed:true
// })

// console.log("UPDATED",todo);
// todo.pop()
// console.log("POPED",todo)

// // obj destructurning
// const to={
//   id:1,
//   title:"hello"
// }
// //  object destructing 
// let{id,title}=to;
// console.log(id,title)


// const arr=[1,2,3,4,5,6]

// let [z,y,x]=arr;
// console.log(, , z,y,x)






















