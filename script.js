let currentUser = null;

function hideAll(){
    document.querySelectorAll(".card").forEach(card=>{
        card.classList.add("hidden");
    });
}


function showRegister(){
    hideAll();
    document.getElementById("registerBox").classList.remove("hidden");
}


function backLogin(){
    hideAll();
    document.getElementById("loginBox").classList.remove("hidden");
}


function register(){

    let name = document.getElementById("registerName").value;
    let pass = document.getElementById("registerPassword").value;
    let pass2 = document.getElementById("registerPassword2").value;


    if(!name || !pass){
        alert("همه قسمت‌ها را پر کنید");
        return;
    }


    if(pass !== pass2){
        alert("رمزها یکی نیستند");
        return;
    }


    let users = JSON.parse(localStorage.getItem("users") || "[]");


    if(users.find(u=>u.username===name)){
        alert("این نام قبلاً ثبت شده");
        return;
    }


    users.push({
        username:name,
        password:pass,
        score:0
    });


    localStorage.setItem("users",JSON.stringify(users));


    alert("حساب ساخته شد");

    backLogin();
}



function login(){

    let name=document.getElementById("loginName").value;
    let pass=document.getElementById("loginPassword").value;


    // مدیر
    if(name==="admin" && pass==="9999"){

        window.location.href="admin.html";
        return;

    }


    let users=JSON.parse(localStorage.getItem("users") || "[]");


    let user=users.find(
        u=>u.username===name && u.password===pass
    );


    if(!user){
        alert("نام یا رمز اشتباه است");
        return;
    }


    currentUser=user;


    hideAll();

    document.getElementById("homeBox").classList.remove("hidden");

    document.getElementById("welcome").innerHTML=
    "سلام "+user.username;


    document.getElementById("score").innerHTML=
    user.score;

}



function showGame(){

    hideAll();

    document.getElementById("gameBox")
    .classList.remove("hidden");

}



function backHome(){

    hideAll();

    document.getElementById("homeBox")
    .classList.remove("hidden");

}



function savePrediction(){

    alert("پیش‌بینی ثبت شد");

}



function ranking(){

    let users=
    JSON.parse(localStorage.getItem("users") || "[]");


    users.sort((a,b)=>b.score-a.score);


    document.getElementById("ranking").innerHTML=
    users.map(
        u=>u.username+" ⭐ "+u.score
    ).join("<br>");


    hideAll();

    document.getElementById("rankBox")
    .classList.remove("hidden");

}
