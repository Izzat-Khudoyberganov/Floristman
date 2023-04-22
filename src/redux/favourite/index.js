import { createSlice, createSelector } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("favorite") || "{}");

export const favoriteSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        handleLike: (state, action) => {
            if (state[action.payload.id]) {
                delete state[action.payload.id];
            } else {
                state[action.payload.id] = {
                    ...action.payload,
                    quantity: 1,
                };
            }
            localStorage.setItem("favorite", JSON.stringify(state));
        },
    },
});

export const getLikedItemsCount = createSelector(
    (state) => Object.values(state.like),
    (like) => like.reduce((acc, item) => acc + item.quantity, 0)
);

export const { handleLike } = favoriteSlice.actions;
export default favoriteSlice.reducer;
