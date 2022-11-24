import React from 'react'
import Card from '../Card/Card'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './Expenses.css'

function Expenses({ expenses }) {
    return (
        <Card className='expenses'>
            {expenses.map((expense, index) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={index} />
            ))}
        </Card>
    )
}

export default Expenses