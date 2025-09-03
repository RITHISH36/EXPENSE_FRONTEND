import { useState } from "react";

const Loginform=()=>{
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const handleusername =(el)=>{
        setusername(el.target.value)
    }
    const handlepassword=(el)=>{
        setpassword(el.target.value)
    }
    const handlesubmit =(el)=>{
        el.preventDefault()
       information(username,password)
    }
    const information=async(username,password)=>{
             await fetch('https://expense-backend-6hi0.onrender.com/insertdatauser',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
             })
    }

    return(<>
    <div className="login-container">
        <div>
            <form>
                <div className="login-username">
            <label htmlFor="username">ENTER USERNAME</label>
            <input type="text" placeholder="Enter your username" value={username} onChange={handleusername}/>
            </div>
            <div className="login-password">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" placeholder="enter your password" value={password} onChange={handlepassword}/>
            </div>
            <div className="login-submit">
                <button type="submit" onClick={handlesubmit}>LOGIN</button>
            </div>
            </form>
        </div>
    </div>
    </>)
}
export default Loginform;