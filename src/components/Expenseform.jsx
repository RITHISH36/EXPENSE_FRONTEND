import { useEffect, useState } from "react";

const Expenseform = (props) => {
    const [title, settitle] = useState("")
    const [amount, setamount] = useState("")
    const { addExpense, edititems, updateExpense ,setititems} = props
    const handleinputachange = (el) => {
        settitle(el.target.value)
    }
    const handleamountchange = (el) => {
        setamount(el.target.value)
    }
    const handlesumbit = (el) => {
        el.preventDefault()
        if (edititems) {
            updateExpense(edititems._id, title, amount)
            setititems(null)
        }
        else {
            
            addExpense(title, amount)
        }

    }
    useEffect(() => {
        settitle(edititems?.title || "")
        setamount(edititems?.amount || "")
    }, [edititems])
    return (<div className="Expense-form">
        <h4>{edititems ? "Edit" : "Add"}Transcation</h4>
        <form onSubmit={handlesumbit}>
            <div>
                <label htmlFor="Title">Title</label>
                <input type="text" id="title" name="title" value={title} onChange={handleinputachange} />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" value={amount} onChange={handleamountchange} /></div>
            <div>
                <button type="submit">{edititems ? "Edit" : "Add"} Transaction</button>
            </div>
        </form></div>)
}
export default Expenseform;