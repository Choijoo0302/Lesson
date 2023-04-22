import { useState } from "react";
import axios from 'axios'

function Login(props) {
    const handlelogin = props.login
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
   
    const login = async()=>{
        try{
            const data =  await axios.post('http://localhost:3001/user/login',{
            email,
            password
        })
        console.log(data.data)
        handlelogin(data.data.token)
        }catch(err){
            console.log(err)
        }
        
    }
    return (
     <div>
        <input type="text" placeholder="email" onChange={handleEmail}/>
        <input type="password" placeholder="password" onChange={handlePassword}/>
        <button onClick={login} >register</button>

    </div> );
}

export default Login;