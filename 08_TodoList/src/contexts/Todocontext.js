import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {} // ✅ Fixed typo
});

// ✅ Custom hook to use Todo Context
export const useTodo = () => {
    return useContext(TodoContext);
};

// ✅ Context Provider Export
export const TodoProvider = TodoContext.Provider;
