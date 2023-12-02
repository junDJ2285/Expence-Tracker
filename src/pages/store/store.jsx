
import { configureStore } from "@reduxjs/toolkit"; 
import { trackerReducer } from "./reducer";
// import trackerReducer from "./reducer";

const store = configureStore({
reducer:trackerReducer
})
export default store

