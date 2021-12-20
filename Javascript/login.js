let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.valid');
let formClose = document.querySelector('#form-close');
let navbar = document.querySelector('.header__nav_list-div');

window.onscroll = () =>{

    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});



function store(){
	var fname = document.getElementById('fname');
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
	var checkemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;





	if(fname.value.length == 0){
        error(fname, 'Please fill in fullname');
    }else{
		success(fname);
	}


    if(name.value.length == 0){
        error(name, 'Please fill in email');
    }else if(!name.value.match(checkemail)){
        error(name, 'Not a valid email');
    }else{
		success(name);
	}



	if(pw.value.length == 0){
        error(pw, 'Please fill in password');
    }
	else if(!pw.value.match(numbers) || !pw.value.match(upperCaseLetters) || !pw.value.match(lowerCaseLetters) || pw.value.length < 8){
        error(pw, 'Password must contain at least 8 characters, including UPPER/lowercase and numbers');

    }else{
		success(pw);
	}

	if(pw.value.match(numbers) && pw.value.match(upperCaseLetters) && pw.value.match(lowerCaseLetters) && pw.value.length >= 8 && name.value.match(checkemail) && fname.value.length !== 0){
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('fname', fname.value);
        alert('Your account have been created');
        location.href = "index.html";
    }
}





function error(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formval error';
	small.innerText = message;
}

function success(input) {
	const formControl = input.parentElement;
	formControl.className = 'formval success';
}




//checking


function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById('rememberMe');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }
//     else if( userName.value === 'admin@mail.ru' && userPw.value === 'Admin007') {
//         alert("Hello admin!");
//         location.href = "indexAdmin.html"; // link to admin panel
//     }
//     else if( userName.value === 'admin2@mail.ru' && userPw.value === 'Admin008') {
//         alert("Hello admin!");
//         location.href = "indexAdminUser2.html"; // link to admin panel
//     }
    else{
        alert('Error on login');
    }
}
