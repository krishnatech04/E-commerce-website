import { configureStore } from "@reduxjs/toolkit";

import {uiPosts, counter }  from "./uiPosts";

const store = configureStore({
    reducer: {
        post: uiPosts.reducer,
        counter: counter.reducer    
    },
})

export default store;