import React from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseFrom';

export default function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            id : (Math.random().toFixed(2) * 100) + 1,
            ...enteredExpenseData,
        }
        props.onAddExpense(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}