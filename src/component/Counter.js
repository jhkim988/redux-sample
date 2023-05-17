import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, incrementAsync, selectCount,
    incrementAsyncWithCreateAsyncThunk } from "../redux/counterSlice"

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    return (
        <div>
            amount: <input type="text" placeholder="Enter amount" onChange={(e) => setAmount(Number(e.target.value) || 0)}/>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <button onClick={() => dispatch(incrementByAmount(amount))}>add amount: {amount}</button>
            <button onClick={() => dispatch(incrementAsync(amount))}>add async: {amount}</button>
            <button onClick={() => dispatch(incrementAsyncWithCreateAsyncThunk(amount))}>add async with createAsyncThunk: {amount}</button>
        </div>
    )

}

export default Counter;