import './App.css'
import ExpenseTracker from './components/ExpenseTrackerForm'
import ExpenseTrackerTable from './components/ExpenseTrackerTable'

function App() {

    return (
        <main>
            <h1 className='heading'>TRACK YOUR EXPENSE</h1>
            <div className="expense-tracker">
                <ExpenseTracker />
                <ExpenseTrackerTable />
                <div className="context-menu">
                    <div>Edit</div>
                    <div>Delete</div>
                </div>
            </div>
        </main>
    )
}

export default App
