import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Loginform = () => {
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
        information(username, password)
        console.log(username);
    }
    const information = async (username, password) => {
        localStorage.setItem("username", username)
        const res = await fetch('https://expense-backend-6hi0.onrender.com/dataauthentication', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })
        console.log(res)
        if (res.ok) {
            Navigate("/expense");
        }
        else {
            toast.error("user not valid! or User does not exist!")
        }
    }

    return (<>
        <div className="login-container">
            <img src="/unnamed.png" alt="ExpenseTracker" className="logo" />
            <div>
                <form>
                    <h2 className="login-top">Login</h2>
                    <div className="login-username">
                        <label htmlFor="username" style={{ fontWeight: 'bold' }}>Enter username</label>
                        <input type="text" placeholder="Enter your username" value={username} onChange={handleusername} />
                    </div>
                    <div className="login-password">
                        <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
                        <NavLink to="/passchange" className="forgetpassword"><span>Forget Password</span></NavLink>
                        <input type="password" placeholder="enter your password" value={password} onChange={handlepassword} />
                    </div>
                    <div className="login-submit">
                        <button type="submit" onClick={handlesubmit}>LOGIN</button>
                    </div>
                    <div className="newtoexpense">
                        <hr />
                        <span>New to ExpenseTracker?</span>
                        <hr />
                    </div>
                    <div className="signup">
                        <NavLink to="/signup"><button>Signup</button></NavLink>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default Loginform;
