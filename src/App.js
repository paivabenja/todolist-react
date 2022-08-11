import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>tudulist</h1>

      <h2 class="hidden" id="advise">
        Chuparemilpija tenes que poner titulo y descripcion fracasdo
      </h2>

      <table id="table">
        <tr class="title" id="title">
          <td>
            <input type="text" placeholder="Todo title" id="titleInput" />
          </td>

          <td>
            <input type="text" placeholder="Todo description" id="descInput" />
          </td>

          <td>
            <button id="add">add</button>
          </td>

          <td>
            <p>done</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
