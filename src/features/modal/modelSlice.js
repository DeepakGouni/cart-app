import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    isModelOpen: false,
}
export const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
        closeModel: (state) => {
            state.isModelOpen = false;
        },
        openModel: (state) => {
            state.isModelOpen = true;
        }
    }

})
export const {closeModel, openModel} = modelSlice.actions;
export default modelSlice.reducer;