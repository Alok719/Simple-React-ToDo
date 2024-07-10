import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemsEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="add a item"
            onChange={itemsEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  item={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
