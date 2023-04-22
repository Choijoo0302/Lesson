import { useState } from "react";
import axios from "../../axios"

function Login (props) {

  const handle = props.login
   
    const [email,setEmail] = useState(null);
    const [password,setPassword]= useState(null);
    const [error,setError] = useState(null)

  const  handeleEmail = (e)=>{
      setEmail(e.target.value)
    }
  const   handelePassword = (e)=>{
      setPassword(e.target.value)
    }
  const handeleClick = async()=>{
    try{
      const response = await axios.post('/user/login',{
        email:email,
        password:password
      })
      handle(response.data.token)
      
    }catch(err){
        console.log(err.response.data)
      setError(err.response.data.error.message)
    }
       
  }

    return ( 
        <div>
            {error && <div>{error}</div>}
            <input type="text" onChange={handeleEmail} />
            <input type="possword" onChange={handelePassword} />
            <button onClick={handeleClick}>register</button>
        </div>
     );
}

export default Login;