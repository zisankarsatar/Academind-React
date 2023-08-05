import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses =[
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
      date: new Date(2000, 4, 23)  
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
      date: new Date(1999, 8, 25)  
    },
    {
      id:5,
      title: 'New Department',
      amount: 294.23,
      date: new Date(2021, 3, 10)  
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense, index)=>(
        <ExpenseItem key={index} expense={expense}></ExpenseItem>
      ))}
    </div>
  );
}

export default App;