import './App.css';
import React, {useEffect, useState} from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpensesFilter from './components/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';

const expensesArray =[
  {
    id:1,
    title: 'Car Insurance',
    amount: 294.23,
    date: new Date(2021, 5, 16)  
  },
  {
    id:2,
    title: 'Health Insurance',
    amount: 180,
    date: new Date(2019, 4, 23)  
  },
  {
    id:3,
    title: 'New Kitchen',
    amount: 1200,
    date: new Date(2022, 10, 1)  
  },
  {
    id:4,
    title: 'Education',
    amount: 30,
    date: new Date(2019, 8, 25)  
  },
  {
    id:5,
    title: 'New Department',
    amount: 294.23,
    date: new Date(2021, 3, 10)  
  },
]

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState('');

  useEffect(() => {
    let newExpenses  = filteredYear === '' ? expensesArray : expensesArray.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    setExpenses(newExpenses);
  },[filteredYear]);

  const addExpenseHandler = enteredExpense =>{
    let tempArr = expenses;
    tempArr.push(enteredExpense);
    setExpenses(tempArr);
    setFilteredYear(filteredYear);
  }

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
    selectedYear === '' ? setFilteredYear('') : setFilteredYear(selectedYear)    
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <div className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses.map((expense, index)=>(
          <ExpenseItem key={index} expense={expense}></ExpenseItem>
        ))}
      </div>
    </div>
  );
}

export default App;
