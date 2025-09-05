import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Changepass = () => {
  const [username, setusername] = useState("")
  const Navigate = useNavigate()
  const handlechangeusername = (el) => {
    setusername(el.target.value)
  }
  const handlesubmit = (el) => {
    el.preventDefault()
    checkusername(username)
  }
  const checkusername=async(username)=>{
     const res=await fetch('https://expense-backend-6hi0.onrender.com/checkuser',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username})
       })
       if(res.ok){
         Navigate("/newpass")
         localStorage.setItem("user",username)
       }
       else{
        toast.error("No User Exist!")
       }
  }
  return (
    <>
      <div className="login-container">
         <img src="/unnamed.png" alt="ExpenseTracker" className="logo" />
        <form>
           <h2 className="login-top">Login</h2>
          <div>
            <label htmlFor="usernamecheck" style={{ fontWeight: "bold" }}>Username</label>
            <input type="text" placeholder="Enter username" value={username} onChange={handlechangeusername} />
          </div>
          <div className="login-submit">
            <button type="submit" onClick={handlesubmit}>Continue</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Changepass;