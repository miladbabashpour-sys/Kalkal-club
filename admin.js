function loadUsers(){

    let users =
    JSON.parse(localStorage.getItem("users") || "[]");


    let box=document.getElementById("usersList");


    if(users.length===0){

        box.innerHTML="هنوز کاربری ثبت نشده";

        return;

    }


    box.innerHTML = users.map((u,index)=>{

        return `
        <div class="card">

        👤 ${u.username}
        <br>
        ⭐ امتیاز: ${u.score}

        <br><br>

        <button onclick="addScore(${index})">
        + امتیاز
        </button>

        </div>
        `;

    }).join("");

}



function addScore(index){

    let users =
    JSON.parse(localStorage.getItem("users") || "[]");


    users[index].score += 1;


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    loadUsers();

}



function backSite(){

    window.location.href="index.html";

}



loadUsers();
