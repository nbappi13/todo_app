import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
