import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    todos: [
        {id: 1, text: "hello world"}
    ],
    complete: [ ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = { id: nanoid(), text: action.payload};
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        checkTodo: (state, action) => {
            // Find the todo to mark as complete
            const completedTodo = state.todos.find(todo => todo.id === action.payload);
          
            // If the todo exists, move it to the complete array
            if (completedTodo) {
              state.complete.push(completedTodo);
              // Remove the completed todo from the todos array
              state.todos = state.todos.filter(todo => todo.id !== action.payload);
            }
          }
          
    }
})
export const { addTodo, removeTodo, checkTodo } = todoSlice.actions
export default todoSlice.reducer;