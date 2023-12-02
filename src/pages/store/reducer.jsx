import { createSlice } from "@reduxjs/toolkit"
// import { useSelector } from "react-redux";
// import { json } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("login"))
const expence = JSON.parse(localStorage.getItem("expence"))
export const trackerReducer = createSlice({
    name: "tacker",
    initialState: {
        user: user,
        expence: expence ||[]
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("login", JSON.stringify(action.payload))
            console.log("action", action.payload)
        },
        logoutUser: (state) => {
            localStorage.setItem("login", JSON.stringify(state.user = null))
        },
        addExpence:(state,action) => {
         const addexpence = {
            ...action.payload,
            id:Math.floor(Math.random()*100)
        }
        state.expence.push(addexpence)
        localStorage.setItem("expence",JSON.stringify(state.expence))

        },
        updateExpence: (state, action) => {
            const editExpence = action.payload;
            state.expence = state.expence.map((exp) =>
            exp.id === editExpence.id ? { ...editExpence } :exp
            );
      
            // console.log(state)
            localStorage.setItem("expence", JSON.stringify(state.expence));
          },
          deleteExpence: (state, action) => {
            const dltExpence = action.payload;
            state.expence = state.expence.filter((exp) => exp.id !== dltExpence);
            localStorage.setItem("expence", JSON.stringify(state.expence));
          },
    }
})

export const { deleteExpence, loginUser, logoutUser, addExpence,updateExpence } = trackerReducer.actions;

export default trackerReducer.reducer;