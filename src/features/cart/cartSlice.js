import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}
export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
//   return fetch(url).then(resp => resp.json()).catch((err) => console.log(err));
    try{
        const resp = await fetch(url);
       return await resp.json();
    }
    catch(err) {
        console.log(err);
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearItems: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        increaseAmount: (state, {payload}) => {
            const reqItem = state.cartItems.find((item) => item.id === payload)
            reqItem.amount += 1;
        },
        decreaseAmount: (state, {payload}) => {
            const reqItem = state.cartItems.find((item) => item.id === payload)
            reqItem.amount -= 1;
        },
        updateTotal: (state) => {
            var total = 0, amount = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.price * item.amount; 
            })
            state.amount = amount;
            state.total = total.toFixed(2);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        })
        .addCase(getCartItems.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
    // extraReducers: {
    //     [getCartItems.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [getCartItems.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.cartItems = action.payload;
    //     },
    //     [getCartItems.rejected]: (state, action) => {
    //         state.isLoading = false;
    //     }
    // }

})

export default cartSlice.reducer;
export const {clearItems, removeItem, increaseAmount, decreaseAmount, updateTotal} = cartSlice.actions;