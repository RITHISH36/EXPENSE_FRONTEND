import { useEffect, useState } from "react";
import History from "./History";
import Expenseform from "./Expenseform";
import { toast } from "react-toastify"
import Balancecontainer from "./Balancecontainer";

const Container = () => {
    const [transcation, settranscation] = useState([])
    const [edititems, setititems] = useState(null)
    // console.log(edititems)/
    //TO POST DATA//
    const addExpense = async (title, amount) => {
        const data = await fetch("https://expense-backend-6hi0.onrender.com/insertdata", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, amount })
        })

        fetchalldata();
        toast.success("Trancation added successful")

    }
    //TO GET THE DATA//
    const fetchalldata = async () => {
        const Response = await fetch('https://expense-backend-6hi0.onrender.com/fetchalldata')
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
    const updateExpense = async(id,title,amount) => {
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
const filter= async(title)=>{
    await fetch('https://expense-backend-6hi0.onrender.com/getdatabytitle',{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title})
    })
    fetchalldata();
}
    return (
        <>
            <div className="container">
                <h2>Expense Tracker</h2>
                <Balancecontainer transcation={transcation} />
                <History transcation={transcation} deleteExpense={deleteExpense} editExpense={editExpense} filter={filter}/>
                <Expenseform addExpense={addExpense} edititems={edititems} updateExpense={updateExpense} setititems={setititems} />

            </div>

        </>)
}
export default Container;