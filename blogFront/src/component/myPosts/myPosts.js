import { useEffect, useState } from "react";
import Post from "../post/post";
import axios from "../../axios";


function Mypost({loginUser}) {
    const[myPosts,setMyposts] =useState(null)
    const userId = loginUser.id
    useEffect(()=>{
        async function fetchData() {
                const response =await axios.get("/post")
                const data = response.data.data;
                const myData =  data.filter((el)=>{
                    return el.createUserId ==userId
                })
                setMyposts(myData)
              return data
          }
          fetchData();
        
    },[])
    return ( 
    <div>
         {myPosts &&  myPosts.map(post=>(
                <Post {...post}/>
            ))}
            <Post />
    </div> 
    );
}

export default Mypost;