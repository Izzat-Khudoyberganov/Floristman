import { configureStore } from "@reduxjs/toolkit";
import like from "./favourite";

const store = configureStore({
    reducer: {
        like,
    },
});

export default store;
