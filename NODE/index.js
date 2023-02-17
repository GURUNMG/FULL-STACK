class Color
{
  constructor(name, code)
  {
    this.name=name;
    this.code=code;
  }
}

let allColor=[new Color("black","#000000"),new Color("red","#213411"),
new Color("green","#679006")];

const getallColors=()=>{
  return allColor[Math.floor(Math.random()*allColor.length)]
}
module.exports = getallColors;