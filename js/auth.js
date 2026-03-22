async function login(){

const username = document.getElementById("username").value
const password = document.getElementById("password").value

const res = await apiRequest("/auth/login","POST",{username,password})

if(res.success){

localStorage.setItem("user",JSON.stringify(res.user))

window.location="dashboard.html"

}else{

alert("Login failed")

}

}

async function register(){

const name = document.getElementById("name").value
const username = document.getElementById("username").value
const password = document.getElementById("password").value

const res = await apiRequest("/auth/register","POST",{

name,
username,
password

})

if(res.success){

alert("Account created")

}else{

alert("Register failed")

}

}