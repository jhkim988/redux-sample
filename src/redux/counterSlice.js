import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 1. dispatch 를 인자로 갖는 콜백함수를 리턴하는 방법
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
}

// 2. createAsyncThunk 를 이용하는 방법
export const incrementAsyncWithCreateAsyncThunk = createAsyncThunk(
    "counter/incrementAsyncWithCreateAsyncThunk",
    async (amount, thunkAPI) => {
        await new Promise((resolve) => setTimeout(() => thunkAPI.dispatch(incrementByAmount(amount)), 1000));
        return amount;
    }
);

export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;