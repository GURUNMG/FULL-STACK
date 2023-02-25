import './App.css';
import ExpenseItem from './components/expense-item/ExpenseItem.jsx';
// import ExpenseDate from './components/expense-date/ExpenseDate.jsx';
function App() {
  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Groceries',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
    {
      id: 'e3',
      title: 'Car Repair',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New work desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseItem 
      title={DUMMY_DATA[0].title}
      amount={DUMMY_DATA[0].amount}
      date={DUMMY_DATA[0].date} />

      <ExpenseItem 
        title={DUMMY_DATA[1].title}
        amount={DUMMY_DATA[1].amount}
        date={DUMMY_DATA[1].date} />

      <ExpenseItem 
        title={DUMMY_DATA[2].title}
        amount={DUMMY_DATA[2].amount}
        date={DUMMY_DATA[2].date} />

      <ExpenseItem 
        title={DUMMY_DATA[3].title}
        amount={DUMMY_DATA[3].amount}
        date={DUMMY_DATA[3].date} />
      </div>
  );
}

export default App;
