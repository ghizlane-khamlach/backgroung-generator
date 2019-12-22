
function sayhellow(){
	console.log("Hello")

}
sayhellow();
var saybye=function(){
	console.log("bye")
}
saybye();
function multiple(a,b){
	return a*b;
}
multiple(10,5);

var css=document.querySelector('h2');
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById('gradient');
function setgradient(){
	body.style.background="Linear-gradient(to right,"+color1.value+","+color2.value+")";
}
color1.addEventListener("input",setgradient);

color2.addEventListener("input",setgradient);

const array=[1,2,10,16];
const double=[];
const newarray=array.forEach((num)=>{
	double.push(num*2);
})
console.log(double);
const mapArray =array.map((num)=>{
	 return num*2;
});
console.log(mapArray);
const filterarray=array.filter(num=>{

return num<5	});
console.log(filterarray);
const reducearray=array.reduce((acc,num)=>{
return acc+num;
},0);

console.log(reducearray);

