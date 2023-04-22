import { useState } from "react";
import axios from 'axios'

function Register() {
    const [userName,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleUsername = (e)=>{
        setUsername(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
   
    const register = async()=>{
        try{
            const data =  await axios.post('http://localhost:3001/user',{
            userName,
            email,
            password
        })
        console.log(data.data.data)
        }catch(err){
            console.log(err)
        }
        
    }
    return (
     <div>
        <input type="text" placeholder="UserName" onChange={handleUsername}/>
        <input type="text" placeholder="email" onChange={handleEmail}/>
        <input type="password" placeholder="password" onChange={handlePassword}/>
        <button onClick={register} >register</button>

    </div> );
}

export default Register;