import React, {useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseFrom';

export default function NewExpense(props){
    const [showFrom, setShowFrom] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            id : (Math.random().toFixed(2) * 100) + 1,
            ...enteredExpenseData,
        }
        props.onAddExpense(expenseData);
        setShowFrom(false);
    }

    return(
        <div className='new-expense'>
            {
                showFrom ? 
                <ExpenseForm onCloseFrom={()=>setShowFrom(false)} onSaveExpenseData={saveExpenseDataHandler}/>:
                <button onClick={()=>{setShowFrom(true)}}>Add New Expense</button> 
            }
            
        </div>
    )
}