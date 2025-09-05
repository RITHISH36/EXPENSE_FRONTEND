import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const Signup = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const Navigate = useNavigate();
    const handleusername = (el) => {
        setusername(el.target.value)
    }
    const handlepassword = (el) => {
        setpassword(el.target.value)
    }
    const handlesubmit = (el) => {
        el.preventDefault()
        if(username&&password){
        userdetail(username, password)}
        else{
            toast.error("Enter required info!")
        }
    }
    const userdetail = async (username, password) => {
        const res = await fetch('https://expense-backend-6hi0.onrender.com/insertdataofuser', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })
        console.log(res)
        if (res.ok) {
            toast.success("Successsfully login!")
            Navigate("/")
        }
        else {
            toast.error("Login Failed! or User Already Exist!")
        }
    }
    return (<>
        <div className="login-container">
            <img src="\public\unnamed.png" alt="ExpenseTracker" className="logo" />
            <div>
                <form>
                    <h2 className="sign-top">Create Account</h2>
                    <div className="login-username">
                        <label htmlFor="username" style={{ fontWeight: 'bold' }}>Your name</label>
                        <input type="text" placeholder="Enter your username" value={username} onChange={handleusername} />
                    </div>
                    <div className="login-password">
                        <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
                        <input type="password" placeholder="enter your password" value={password} onChange={handlepassword} />
                    </div>
                    <div className="login-submit">
                        <button type="submit" onClick={handlesubmit}>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}
export default Signup;