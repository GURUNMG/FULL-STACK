// adding text insise the body tage we use document .body.innnerText
document.body.innerText="HELLO WORLD"

// add styles to body  .... document.body.style="css properties"
document.body.style="color: red"; 
document.body.style="background-color:cyan"


// setTimeout()
setTimeout(()=>{
  document.body.innerText="GURU";
  document.body.style='color: red';
  document.body.style='background-color:green';
  
},2000)

setTimeout(()=>{
  document.body.innerText="GURU";
  document.body.style='color: red';
  document.body.style='color: green';
  
},1000)