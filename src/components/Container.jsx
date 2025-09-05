import { useEffect, useState } from "react";
import History from "./History";
import Expenseform from "./Expenseform";
import { toast } from "react-toastify"
import Balancecontainer from "./Balancecontainer";
import { NavLink } from "react-router";

const Container = () => {
    const [transcation, settranscation] = useState([])
    const [edititems, setititems] = useState(null)
    const[isopen,setisopen]=useState(false)
    const settingbar=()=>setisopen(!isopen)
    const logout=()=>{
        setisopen(false)
        localStorage.removeItem("username")
    }
    // console.log(edititems)/
    //TO POST DATA//

    const addExpense = async (user, title, amount) => {
        const data = await fetch("https://expense-backend-6hi0.onrender.com/insertdata", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, title, amount })
        })

        fetchalldata();
        toast.success("Trancation added successful")

    }
    //TO GET THE DATA//
    // const user=localStorage.getItem("username")

    const fetchalldata = async () => {
        const user = localStorage.getItem("username")
        console.log(user)
        const Response = await fetch('https://expense-backend-6hi0.onrender.com/fetchalldata', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user })
        })
        const data = await Response.json();
        settranscation(data)
    }
    const fetchdataname = async (title) => {
        const Response = await fetch('https://expense-backend-6hi0.onrender.com/fetchdatabyname', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title })
        })
        const data = await Response.json();
        settranscation(data)
    }
    useEffect(() => {
        fetchalldata();
    }, [])


    const deleteExpense = async (id) => {
        await fetch('https://expense-backend-6hi0.onrender.com/deletedata', {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
        });
        fetchalldata();
        toast.success("Delete successfully ")
    }
    const updateExpense = async (id, title, amount) => {
        await fetch("https://expense-backend-6hi0.onrender.com/editdata", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, title, amount })
        })
        fetchalldata();
    }
    const editExpense = (item) => {
        setititems(item)
    }

    return (
        <>
            <div className="container">
                <nav className="setting-bar" onClick={settingbar} >
                <button className="setting">&#9881;</button>
                {isopen ?(<div className="setbar">
                    <NavLink to="/" onClick={logout} className="logout">Logout</NavLink>
                </div>):null}
                </nav>
                <img src="\public\unnamed.png" alt="ExpenseTracker" className="logo" />

                <Balancecontainer transcation={transcation} />
                <History transcation={transcation} deleteExpense={deleteExpense} editExpense={editExpense} fetchdataname={fetchdataname} />
                <Expenseform addExpense={addExpense} edititems={edititems} updateExpense={updateExpense} setititems={setititems} />

            </div>

        </>)
}
export default Container;