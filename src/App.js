import "./styles.css";
import { useState } from "react";
import defaultState4 from "./default-state";
import Tree from "./Tree.jsx";

export default function App() {
  const [menu, setMenu] = useState([...defaultState4]);

  const onChangeEvent = (newMenuState) => {
    setMenu(newMenuState);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="body">
          <Tree menu={menu} changeEvent={onChangeEvent} />
        </div>
      </div>
    </div>
  );
}
