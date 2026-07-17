let players=[

"میلاد",
"پیمان",
"امید",
"یاشار",
"نیما",
"حمید",
"الشن",
"آرزو",
"شیوا",
"مهسا",
"معصومه"

];


let currentUser="";


function login(){

let name=document.getElementById("player").value;

currentUser=name;


let users=JSON.parse(localStorage.getItem("users")) || {};


if(!users[name]){

users[name]=50;

alert("🎁 جعبه شروع باز شد\n⭐ 50 امتیاز هدیه گرفتی");

}


localStorage.setItem("users",JSON.stringify(users));


document.getElementById("loginBox").classList.add("hidden");

document.getElementById("homeBox").classList.remove("hidden");


document.getElementById("welcome").innerHTML=
"سلام "+name+" 👋";


document.getElementById("score").innerHTML=
users[name];


}



function showGame(){

document.getElementById("homeBox").classList.add("hidden");

document.getElementById("gameBox").classList.remove("hidden");

}



function savePrediction(){

alert("✅ پیش‌بینی ثبت شد");

}



function ranking(){

document.getElementById("homeBox").classList.add("hidden");

document.getElementById("rankBox").classList.remove("hidden");


let users=JSON.parse(localStorage.getItem("users")) || {};

let html="";


Object.entries(users)
.sort((a,b)=>b[1]-a[1])
.forEach((p,index)=>{

html+=`

<div class="rank">

${index+1} - ${p[0]}
⭐ ${p[1]}

</div>

`;

});


document.getElementById("ranking").innerHTML=html;


}
