let currentLang="en"

const langData={

en:{
login:"Login",
register:"Register",
username:"Username",
password:"Password",
name:"Name",
logout:"Logout",
addProduct:"Add Product",
productName:"Product Name",
price:"Price",
stock:"Stock",
save:"Save",
sales:"Sales",
customer:"Customer",
quantity:"Quantity",
total:"Total"
},

so:{
login:"Soo gal",
register:"Isdiiwaan geli",
username:"Magaca isticmaalaha",
password:"Furaha",
name:"Magaca",
logout:"Ka bax",
addProduct:"Ku dar Alaab",
productName:"Magaca Alaabta",
price:"Qiimaha",
stock:"Kaydka",
save:"Kaydi",
sales:"Iib",
customer:"Macmiil",
quantity:"Tirada",
total:"Wadarta"
}

}

function setLang(lang){

currentLang=lang

document.querySelectorAll("[data-lang]").forEach(el=>{
el.innerText = langData[lang][el.dataset.lang]
})

}