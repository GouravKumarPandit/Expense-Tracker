import { useState } from 'react'
import './App.css'
import ContextMenu from './components/ContextMenu'
import ExpenseTracker from './components/ExpenseTrackerForm'
import ExpenseTrackerTable from './components/ExpenseTrackerTable'
import defaultData from './defaultData'

function App() {
    const [expenses, setExpenses] = useState(defaultData)

    return (
        <main>
            <h1 className='heading'>TRACK YOUR EXPENSE</h1>
            <div className="expense-tracker">
                <ExpenseTracker setExpenses={setExpenses} />
                <ExpenseTrackerTable expenses={expenses} />
                <ContextMenu />
            </div>
        </main>
    )
}

export default App
