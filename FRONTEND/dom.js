// adding text insise the body tage we use document .body.innnerText
// document.body.innerText="HELLO WORLD"

// add styles to body  .... document.body.style="css properties"
// document.body.style="color: red"; 
// document.body.style="background-color:cyan"


// // setTimeout()
// setTimeout(()=>{
//   document.body.innerText="GURU";
//   document.body.style='color: red';
//   document.body.style='background-color:green';
  
// },2000)

// setTimeout(()=>{
//   document.body.innerText="GURU";
//   document.body.style='color: red';
//   document.body.style='color: green';
  
// },1000)


// const alter=document.getElementById('change');
// alter.innerText="IDIOT"
// alter.style="color:red";

// adding a tag inside div we use document.innerHTML 
// alter.innerHTML='<p>hello</p>'  
// console.log(alter)

// for getting the tags used in the HTML file
// const pTag=document.getElementsByTagName('p')
// console.log(pTag)
const li=document.getElementsByTagName('li');

let num=0;

// for of loop
for (const itr of li) {
  itr.innerText=++num;
}
console.log(Array.isArray(li))
