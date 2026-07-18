let currentUser = null;


// نمایش ثبت نام
function showRegister(){

    document.getElementById("loginBox")
    .classList.add("hidden");

    document.getElementById("registerBox")
    .classList.remove("hidden");

}



// برگشت به ورود
function backLogin(){

    document.getElementById("registerBox")
    .classList.add("hidden");

    document.getElementById("loginBox")
    .classList.remove("hidden");

}




// ثبت نام

function register(){

    let name =
    document.getElementById("registerName").value.trim();


    let pass =
    document.getElementById("registerPassword").value.trim();


    let pass2 =
    document.getElementById("registerPassword2").value.trim();



    if(!name || !pass){

        alert("نام و رمز را وارد کنید");
        return;

    }



    if(pass.length !== 4){

        alert("رمز باید ۴ رقم باشد");
        return;

    }



    if(pass !== pass2){

        alert("تکرار رمز درست نیست");
        return;

    }



    let users =
    JSON.parse(localStorage.getItem("users")) || {};



    if(users[name]){

        alert("این نام قبلاً ثبت شده");
        return;

    }



    let firstUser =
    Object.keys(users).length === 0;



    users[name]={

        password:pass,

        score:50,

        role:firstUser ? "admin" : "user"

    };



    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );



    alert(
        firstUser
        ?
        "حساب ساخته شد. شما مدیر کلاب هستید 👑"
        :
        "حساب ساخته شد"
    );



    backLogin();

}





// ورود

function login(){

    let name =
    document.getElementById("loginName").value.trim();


    let pass =
    document.getElementById("loginPassword").value.trim();



    let users =
    JSON.parse(localStorage.getItem("users")) || {};



    if(!users[name]){

        alert("کاربری با این نام وجود ندارد");
        return;

    }



    if(users[name].password !== pass){

        alert("رمز اشتباه است");
        return;

    }



    currentUser=name;



    document.getElementById("loginBox")
    .classList.add("hidden");


    document.getElementById("homeBox")
    .classList.remove("hidden");



    document.getElementById("welcome")
    .innerHTML =
    "سلام "+name+" 👋";



    document.getElementById("score")
    .innerHTML =
    users[name].score;



    // فقط مدیر دکمه مدیریت را می بیند

    if(users[name].role==="admin"){


        document.getElementById("adminBtn")
        .classList.remove("hidden");


        document.getElementById("adminBtn")
        .onclick=function(){

            alert("پنل مدیریت در حال ساخت است");

        };


    }


}





// بازی

function showGame(){

    hideAll();

    document.getElementById("gameBox")
    .classList.remove("hidden");

}





// خانه

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

    .forEach((user,index)=>{


        html += `

        <div class="rank">

        ${index+1} -
        ${user[0]}

        ⭐ ${user[1].score}

        </div>

        `;


    });



    document.getElementById("ranking")
    .innerHTML=html;


}





function hideAll(){

    let pages=[

        "homeBox",
        "gameBox",
        "rankBox"

    ];



    pages.forEach(page=>{

        document.getElementById(page)
        .classList.add("hidden");

    });

}





function savePrediction(){

    alert("✅ پیش‌بینی ثبت شد");

}
