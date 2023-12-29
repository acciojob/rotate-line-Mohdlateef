//your JS code here. If required.


const line=document.getElementById("line");
let deg=2;
setInterval(()=>{
  deg=deg+2;
  line.style.transform=`rotate(${deg}deg)`
  
  console.log("abc");
},20)