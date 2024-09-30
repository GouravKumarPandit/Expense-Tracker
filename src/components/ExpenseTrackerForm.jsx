import React from 'react'

function ExpenseTrackerForm() {
    return (
        <form className="expense-form">
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input id="title" placeholder='Title' />
            </div>
            <div className="input-container">
                <label htmlFor="category">Category</label>
                <input id="category" placeholder='Category' />
            </div>
            <div className="input-container">
                <label htmlFor="amount">Amount</label>
                <input id="amount" placeholder='Amount' />
            </div>
            <button className="add-btn">+ Add</button>
        </form>
    )
}

export default ExpenseTrackerForm