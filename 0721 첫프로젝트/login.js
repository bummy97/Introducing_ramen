function submitData() {
    if(checkLoginForm() == true) {
        alert("축하합니다. 모든 유효성 검사를 통과하셨습니다.");
        submit();
    }
}

function checkLoginForm() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value == ""){
        alert("이메일을 입력해주세요.");
        return false;
    }
    
    else if(password.value == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    }else{
        return true;
    }
}