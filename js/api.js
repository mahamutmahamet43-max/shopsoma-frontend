const API_URL = "https://gentle-communication-production-1f47.up.railway.app/api"

async function apiRequest(endpoint,method="GET",data=null){

const options = {
method,
headers:{
"Content-Type":"application/json"
}
}

if(data){
options.body = JSON.stringify(data)
}

const res = await fetch(API_URL+endpoint,options)

return res.json()

}