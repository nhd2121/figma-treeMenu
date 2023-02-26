import "./TreeList.scss";
import { treeDataType, treeDatas } from "./ListTreeMenuItems";
import Tree from "./Tree";
import { useState } from "react";

export default function TreeList() {
  const [data, setData] = useState<treeDataType[] | undefined>(treeDatas);
  const [text, setText] = useState<string>("");

  const handleEnterPressFromUser = (event: any) => {
    if (event.key === "Enter") {
      const foundDatas =
        treeDatas && treeDatas?.length > 0
          ? treeDatas?.filter((treeData) => treeData?.label.includes(text))
          : undefined;
      setData(foundDatas);
    }
  };

  return (
    <div className="tree-menu-container">
      <div className="tree">
        <h2 className="tree-menu-title">Tree Menu</h2>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setData(treeDatas);
            }}
            onKeyDown={handleEnterPressFromUser}
          />
        </div>
        <div className="tree-menu-data">
          <div className="tree-menu-data-row">
            <div className="tree-menu-data-col">
              <Tree treeData={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
