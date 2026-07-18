let currentUser = "";
let isAdmin = false;


// کاربران اولیه
let defaultUsers = {
    "میلاد": {
        password: "1234",
        score: 50,
        role: "user"
    },

    "پیمان": {
        password: "1111",
        score: 50,
        role: "user"
    },

    "مدیر": {
        password: "9999",
        score: 1000,
        role: "admin"
    }
};



// ورود
function login(){

    let name = document.getElementById("playerName").value.trim();
    let password = document.getElementById("playerPassword").value.trim();


    if(!name || !password){

        alert("نام و رمز را وارد کنید");
        return;

    }



    let users = JSON.parse(localStorage.getItem("users"));


    if(!users){

        users = defaultUsers;

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

    }



    if(!users[name]){

        alert("این کاربر وجود ندارد");
        return;

    }



    if(users[name].password !== password){

        alert("رمز اشتباه است");
        return;

    }



    currentUser = name;


    isAdmin = users[name].role === "admin";



    document.getElementById("loginBox")
    .classList.add("hidden");


    document.getElementById("homeBox")
    .classList.remove("hidden");



    document.getElementById("welcome")
    .innerHTML =
    "سلام " + name + " 👋";



    document.getElementById("score")
    .innerHTML =
    users[name].score;



    if(isAdmin){

        document.getElementById("adminBtn")
        .classList.remove("hidden");


        document.getElementById("adminBtn")
        .onclick=function(){

            openAdmin();

        };

    }


}






// رفتن به بازی

function showGame(){

    hideAll();

    document.getElementById("gameBox")
    .classList.remove("hidden");

}




// برگشت به خانه

function backHome(){

    hideAll();

    document.getElementById("homeBox")
    .classList.remove("hidden");

}





// جدول

function ranking(){

    hideAll();

    document.getElementById("rankBox")
    .classList.remove("hidden");



    let users =
    JSON.parse(localStorage.getItem("users")) || {};



    let html="";



    Object.entries(users)

    .sort((a,b)=>b[1].score-a[1].score)

    .forEach((p,index)=>{


        html += `

        <div class="rank">

        ${index+1}
        -
        ${p[0]}

        ⭐ ${p[1].score}

        </div>

        `;


    });



    document.getElementById("ranking")
    .innerHTML=html;


}






// پنل مدیریت

function openAdmin(){

    hideAll();

    document.getElementById("adminBox")
    .classList.remove("hidden");

}





// مخفی کردن صفحات

function hideAll(){

    let boxes=[

        "homeBox",
        "gameBox",
        "rankBox",
        "adminBox"

    ];



    boxes.forEach(id=>{

        document.getElementById(id)
        .classList.add("hidden");

    });


}





// ثبت پیش بینی

function savePrediction(){

    alert(
        "✅ پیش‌بینی شما ثبت شد"
    );

}
