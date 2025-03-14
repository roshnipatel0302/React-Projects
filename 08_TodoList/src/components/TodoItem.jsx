import React, { useState } from 'react';
import { useTodo } from '../contexts/todocontext';

const TodoItem = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const [todomessage, setTodomessage] = useState(todo.todo);

    const { updateTodo, deleteTodo, toggleComplete } = useTodo(); // ✅ Fixed typo in `toggleComplete`

    // ✅ Toggle Complete
    const toggleCompleted = () => {
        toggleComplete(todo.id); // ✅ Removed unnecessary `id` parameter
    };

    // ✅ Edit Todo
    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todomessage });
        setEdit(false);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            {/* ✅ Checkbox for Completion */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted} // ✅ Correct function reference
            />

            {/* ✅ Input Field for Todo */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    edit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todomessage} 
                onChange={(e) => setTodomessage(e.target.value)}
                readOnly={!edit}
            />

            {/* ✅ Edit/Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (edit) {
                        editTodo();
                    } else setEdit((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {edit ? "📁" : "✏️"}
            </button>

            {/* ✅ Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
};

export default TodoItem;
