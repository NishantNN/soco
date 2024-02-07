function toggleProfile() {
    // Get the element with the id "profile_on"
    let activeProfile = document.getElementById("profile_on");

    // Toggle the "active" class
    activeProfile.classList.toggle("active");
}

let UserCreds = JSON.parse(sessionStorage.getItem('user-creds'));
let UserInfo = JSON.parse(sessionStorage.getItem('user-info'));

let user_type = document.getElementById('user_type');
let fullname = document.getElementById('fullname');
let mail = document.getElementById('mail');
let phoneno = document.getElementById('phoneno');
let changepassword = document.getElementById('changepassword');
let LogoutBtn = document.getElementById('LogoutBtn');


let Logout = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = 'index.html';
}

let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds")) {
        window.location.href = 'index.html'
    }
    else {
        user_type.innerText = `${UserInfo.UserType}`;
        fullname.innerText = `${UserInfo.Fullname}`;
        phoneno.innerText = `${UserInfo.PhoneNo}`;
        mail.innerText = `${UserCreds.email}`;
    }
}

window.addEventListener('load', CheckCred);
LogoutBtn.addEventListener('click', Logout)