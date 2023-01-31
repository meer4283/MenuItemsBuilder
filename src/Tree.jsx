import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Menu from "./Menu.jsx";

const Tree = ({ menu, changeEvent }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Menu
        menu={menu}
        mainMenu={menu}
        changeEvent={changeEvent}
        depth={0}
        location="menu-item"
      />
    </DndProvider>
  );
};

export default Tree;
