let x=5
const y=6
let myname= "Daniel"
const z=9
let jointSection=x+y+z
console.log(jointSection)   
let v=4
v*=2
let cut=v**2
console.log(cut)

function logName(name){
    return name
}
logName("Nagi")

function quadraticFormula(a,b,c){
    return [-b+((b**2)-4*a*c)**0.5/2*a,-b-((b**2)-4*a*c)**0.5/2*a]
}
let a=1
let b=4
let c=1

console.log(quadraticFormula(a,b,c))
