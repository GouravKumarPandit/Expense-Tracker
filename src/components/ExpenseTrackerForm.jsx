import React, { useState } from 'react'
import InputField from './InputField';
import SelectField from './SelectField';

function ExpenseTrackerForm({ setExpenses }) {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        category: "",
        amount: "",
    })

    function storeNewExpense(event) {
        event.preventDefault();
        setExpenses((prevState) => ([...prevState, { ...formData, id: crypto.randomUUID() }]))
    }

    return (
        <form className="expense-form" onSubmit={storeNewExpense}>
            <InputField title="title" type="text" label="Title" value={formData.title} onChange={(event) => setFormData((prevState) => ({ ...prevState, title: event.target.value }))} />
            <SelectField title="category" selectOptions={['Grocery', 'Clothes', 'Bills', 'Grocery', 'Education', 'Medicine']} label="Category" value={formData.category} onChange={(event) => setFormData((prevState) => ({ ...prevState, category: event.target.value }))} />
            <InputField title="amount" type="number" label="Amount" value={formData.amount} onChange={(event) => setFormData((prevState) => ({ ...prevState, amount: event.target.value }))} />
            <button className="add-btn">+ Add</button>
        </form>
    )
}

export default ExpenseTrackerForm