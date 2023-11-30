import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todosList: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodos: (state, action) => {
			state.todosList.push(action.payload);
		},
	},
});

export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;
