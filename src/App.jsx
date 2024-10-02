import { useState } from 'react'
import './App.css'
import ContextMenu from './components/ContextMenu'
import ExpenseTrackerForm from './components/ExpenseTrackerForm'
import ExpenseTrackerTable from './components/ExpenseTrackerTable'
import defaultData from './defaultData'
import AlertMsg from './components/AlertMsg'

function App() {
    const [expenses, setExpenses] = useState(defaultData);
    const [editable, setEditable] = useState({
        id: "",
        title: "",
        category: "",
        amount: "",
    })
    const [contextMenu, setContextMenu] = useState({
        'clientX' : "",
        'clientY' : "",
    });
    const [isDelete, setIsDelete] = useState({id: ""});
    const [alertMsgBox, setAlertMsgBox] = useState("");
    if(alertMsgBox){
        setTimeout(() => setAlertMsgBox(""), 5000)
    }

    if(isDelete.id){
        setExpenses((prevState) => {
            return prevState.filter((expense) => expense.id !== isDelete.id) 
        });
        setIsDelete({id: ""})
        setAlertMsgBox("Expense Deleted Successfully!")
    }

    return (
        <main onClick={() => setContextMenu({})}>
            <h1 className='heading'>TRACK YOUR EXPENSE</h1>
            {alertMsgBox && <AlertMsg alertMsgBox={alertMsgBox} />}
            <div className="expense-tracker">
                <ExpenseTrackerForm setExpenses={setExpenses} editable={editable} setEditable={setEditable} setAlertMsgBox={setAlertMsgBox} />
                <ExpenseTrackerTable expenses={expenses} setContextMenu={setContextMenu} />
                {(contextMenu.clientX || contextMenu.clientY) && <ContextMenu contextMenu={contextMenu} setEditable={setEditable} setIsDelete={setIsDelete} />}
            </div>
        </main>
    )
}

export default App
