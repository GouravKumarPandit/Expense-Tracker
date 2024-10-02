import React, { useEffect, useState } from 'react'
import InputField from './InputField';
import SelectField from './SelectField';

function ExpenseTrackerForm({ setExpenses, editable, setEditable, setAlertMsgBox }) {
    const category = ['Grocery', 'Clothes', 'Bills', 'Grocery', 'Education', 'Medicine'];
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        category: "",
        amount: "",
    })

    useEffect(() => {
        if(editable.id){
            setFormData(editable)
        }
    }, [editable])

    function storeNewExpense(event) {
        event.preventDefault();
        if(formData.id){
            setExpenses((prevState) => {
                return prevState.map((expense) => {
                    if(expense.id === editable.id){
                        return {...formData}
                    }

                    return expense
                }) 
            });
            setEditable({id: "", title: "", category: "", amount: ""})
            setFormData({id: "", title: "", category: "", amount: ""})
            setAlertMsgBox("Expense Updated Successfully!")
        } else{
            setExpenses((prevState) => ([...prevState, { ...formData, id: crypto.randomUUID() }]));
            setFormData({id: "", title: "", category: "", amount: ""})
            setAlertMsgBox("Expense Added Successfully!")
        }
    }

    return (
        <form className="expense-form" onSubmit={storeNewExpense}>
            <InputField title="title" type="text" label="Title" value={formData.title} onChange={(event) => setFormData((prevState) => ({ ...prevState, title: event.target.value }))} />
            <SelectField title="category" selectOptions={category} label="Category" value={formData.category} onChange={(event) => setFormData((prevState) => ({ ...prevState, category: event.target.value }))} />
            <InputField title="amount" type="number" label="Amount" value={formData.amount} onChange={(event) => setFormData((prevState) => ({ ...prevState, amount: event.target.value }))} />
            <button className="add-btn">{editable.id ? "Update" : "+ Add"}</button>
        </form>
    )
}

export default ExpenseTrackerForm