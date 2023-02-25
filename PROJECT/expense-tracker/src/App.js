import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  return (
    <div>
    <ExpenseItem 
    title={"parking"}
    amount={10}
    date={new Date(2023,0,24)} />
    </div>
  );
}

export default App;
