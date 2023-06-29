import {data} from './data'
import { createSlice } from "@reduxjs/toolkit";
import cartReducers, { counterReducers } from './reducers';

export const counter = createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers: counterReducers
})

export const uiPosts = createSlice({
    name: 'post',
    initialState: {postData: data},
    reducers: cartReducers
});


export const counterAction = counter.actions;
export const actions = uiPosts.actions;

