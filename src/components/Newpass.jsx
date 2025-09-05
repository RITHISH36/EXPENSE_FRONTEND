import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Newpass = () => {
    const [Newpassword, setnewpassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
const username=localStorage.getItem("user")
const Navigate=useNavigate()
    const handlenewpassword = (el) => {
        
        setnewpassword(el.target.value)
    }

    const handlecomfirmpassword = (el) => {

        setConfirmPassword(el.target.value)
    }

    const handlesumbit = (el) => {
        el.preventDefault()
        if(Newpassword===ConfirmPassword&&ConfirmPassword){
        changepass(ConfirmPassword,username)
    }
    else{
        toast.error(" check confrim Password! or Enter the password!");
    }
    }
    const changepass=async(ComfirmPassword,username)=>{
        
        const res=await fetch('https://expense-backend-6hi0.onrender.com/changepassword',{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({ComfirmPassword,username})
        })
        console.log(res)
        
        if(res.ok){
            toast.success("Password Changed")
            Navigate('/')
        }
        else{
            toast.error("Password Not Changed")
        }
    }

    return (
        <>
            <div className="login-container">
                 <img src="/unnamed.png" alt="ExpenseTracker" className="logo" />
                <form>
                     <h2 className="newpass-top">Create new password</h2>
                    <div>
                        <label htmlFor="Newpassword" style={{fontWeight:"bold"}}>Newpassword</label>
                        <input type="password" placeholder="NewPassword" value={Newpassword} onChange={handlenewpassword} />
                    </div>
                    <div>
                        <label htmlFor="ComfirmPassword" style={{fontWeight:"bold"}}>ConfirmPassword</label>
                        <input type="password" placeholder="ConfirmPassword" value={ConfirmPassword} onChange={handlecomfirmpassword} />
                    </div>
                    <div className="login-submit">
                        <button type="submit" onClick={handlesumbit} style={{fontWeight:"bold"}}>Save changes and Sign-in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Newpass;