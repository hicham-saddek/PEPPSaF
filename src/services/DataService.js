import axios from "axios"
import {url} from "../router/index.js"

export const all = () => {
    return axios.get(url('all')).then((res)=>res.data.data).catch(()=>[]);
}

export const notSeen = () => {
    return axios.get(url('unseen')).then((res)=>res.data.data).catch(()=>[]);
}