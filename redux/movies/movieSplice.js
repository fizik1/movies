import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    movies:[],
}

export const movieSplice = createSlice({
    name:"movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) =>{
            state.movies = payload;
        },
    },
})

export const { addMovies } = movieSplice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSplice.reducer;