import React from "react";

const Todo = (props) => {
  return (
    <tr>
      <td>
        <p>{props.title}</p>
      </td>
      <td>
        <p>{props.descripcion}</p>
      </td>
      <td>{props.removeBtn}</td>
      <td>{props.doneCheckbox}</td>
    </tr>
  );
};

export default Todo;
