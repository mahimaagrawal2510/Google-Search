import axios from 'axios';
function getData(url, payload, cb = () => { }) {
    axios.get(url).then((res) => {
        cb(res.data)
    }).catch((err) => {
        console.log(err)
    })
}

export { getData }