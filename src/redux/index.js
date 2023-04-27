import { configureStore } from "@reduxjs/toolkit";
import like from "./favourite";
import cart from "./cart";

const store = configureStore({
    reducer: {
        like,
        cart,
    },
});

export default store;
