function adminLogin(){


let pass=document.getElementById("password").value;


if(pass=="milad"){


document
.getElementById("loginAdmin")
.classList.add("hidden");


document
.getElementById("panel")
.classList.remove("hidden");


}

else{

alert("رمز اشتباه است");

}


}



function saveResult(){


let result={


iran:
document.getElementById("iranResult").value,


brazil:
document.getElementById("brazilResult").value,


firstGoal:
document.getElementById("goalTeam").value


};


localStorage.setItem(
"matchResult",
JSON.stringify(result)
);



alert(
"✅ نتیجه ثبت شد و آماده محاسبه امتیاز است"
);


}
