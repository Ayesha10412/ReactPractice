import { useEffect, useState } from "react"
import User from "./User"
import './Friends.css'
export default function Users(){

    const [users, setUsers]= useState([])
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=>setUsers(data))
} , [])

    return(
        <div className="box">
<h3>Users: {users.length}</h3>
{
    users.map(user=><User 
    user={user}></User>)
}

        </div>
    )
}