import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
  let table = document.getElementById("table");
  console.log(table)
  let [nextId, setNextId] = useState(0);

  const getId = () => {
    return;
  };

  const addTodo = () => {
    let newTodo = document.createElement('Todo')
    table.appendChild(newTodo);
  };

  return (
    <div className="App">
      <h1>tudulist</h1>
      <table id="table">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>
              <button onClick={addTodo()}>AddTodo</button>
            </th>
            <th>Is done</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
