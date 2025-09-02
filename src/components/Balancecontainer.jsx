import { useEffect } from "react";
import { useState } from "react";

const Balancecontainer = (props) => {
    const { transcation } = props
    const [income, setIncome] = useState(0)
    const [expense, setexpense] = useState(0)
    const balance = income + expense;

    useEffect(() => {
        console.log(transcation)

        let inc = 0
        let exp = 0
        transcation.forEach((tsn) => {
            if (tsn.amount < 0) {
                exp += Number(tsn.amount)
            }
            else {
                inc += Number(tsn.amount)
            }
        });
        setIncome(inc)
        setexpense(exp)
    }, [transcation])
    return (
        <>
            <div className="balance-container">
                <div className="currency-item">
                    <div className="title">Income</div>
                    <div className="amount green">${income}</div>
                </div>
                <div className="currency-item">
                    <div className="title">Expense</div>
                    <div className="amount red">${expense}</div>
                </div>
                <div className="currency-item">
                    <div className="title">Balance</div>
                    <div className="amount">{balance}</div>
                </div>
            </div>
        </>)
}
export default Balancecontainer;