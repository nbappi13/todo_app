import React from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo({ todos, setTodos }) {
  
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
