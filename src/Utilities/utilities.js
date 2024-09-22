import axios from 'axios';
function GetData(url, payload, cb=()=>{}){
    axios.get(url).then((res)=>{
        console.log(res.data)
        cb(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}

export {GetData}