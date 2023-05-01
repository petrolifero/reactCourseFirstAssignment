import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <>
        {expenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </>
    );
}

export default Expenses
