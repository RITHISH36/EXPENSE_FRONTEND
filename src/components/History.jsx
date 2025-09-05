import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import Container from "./Container";
const History = (props) => {
    const { transcation, deleteExpense, editExpense, fetchdataname } = props
    console.log(transcation)
    const [search, setsearch] = useState("")
    const handlesearch = (el) => {
        el.preventDefault()
        fetchdataname(search)
    }
    const handlesearchange = (el) => {
        setsearch(el.target.value)


    }
    return (
        <>
            <h4>Filter</h4>
            <div className="filter-search">
                <input className="filter" placeholder="Filter or Search History" value={search} onChange={handlesearchange} />
                <button className="search" onClick={handlesearch}>search</button>
            </div>
            <h4>History</h4>
            {transcation.map((item) => {
                return <ExpenseItem key={item._id} item={item} deleteExpense={deleteExpense} editExpense={editExpense} search={search} />
            })}
        </>
    )
}
export default History;