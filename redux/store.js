import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSplice"

export const store = configureStore({
    reducer:{ 
        movies:moviesReducer 
    }
})