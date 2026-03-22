const user = JSON.parse(localStorage.getItem("user"))

if(!user){

window.location="index.html"

}

async function loadProducts(){

const products = await apiRequest("/products/"+user.username)

const table = document.getElementById("products")

table.innerHTML=""

products.forEach(p=>{

table.innerHTML += `

<tr>

<td>${p.name}</td>
<td>${p.price}</td>
<td>${p.stock}</td>

<td>

<button onclick="deleteProduct('${p._id}')">X</button>

</td>

</tr>

`

})

}

async function addProduct(){

const name = document.getElementById("pname").value
const price = document.getElementById("pprice").value
const stock = document.getElementById("pstock").value

await apiRequest("/products","POST",{

shop:user.username,
name,
price,
stock

})

loadProducts()

}

async function deleteProduct(id){

await apiRequest("/products/"+id,"DELETE")

loadProducts()

}

async function addSale(){

const product = document.getElementById("sproduct").value
const customer = document.getElementById("scustomer").value
const quantity = document.getElementById("squantity").value
const total = document.getElementById("stotal").value

await apiRequest("/sales","POST",{

shop:user.username,
product,
customer,
quantity,
total

})

alert("Sale saved")

}

function logout(){

localStorage.removeItem("user")

window.location="index.html"

}

loadProducts()