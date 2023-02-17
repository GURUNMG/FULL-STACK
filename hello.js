// REPL =>
// R => READ
// E => EVALUATE 
// P => PRINT
// L => LOOP

let add =(a,b)=>{
  console.log(a+b);
}

let sub = (a,b)=>
{
  console.log(a-b);
}

let mul=(a,b)=>{
  console.log(a*b);
}

let div=(a,b)=>{
  console.log(a/b);
}

let operation=process.argv;
let num1=parseInt(operation[3]);
let num2=parseInt(operation[4]);
let symbol=operation[2];

switch(symbol)
{
  case "+": add(num1,num2);
  break;

  case "-": sub(num1,num2);
  break;

  case "*": mul(num1,num2);
  break;

  case "/": div(num1,num2);
  break;

  default:
    console.log("NOTHING");
    break;
}

// for * use '*' as a string  
// first  2 index will be taken by node and the current file name


