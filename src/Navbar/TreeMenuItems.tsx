import "./TreeMenuItem.scss";
import { ChevronDown, ChevronUp, DotMark } from "@carbon/icons-react";
import { useState } from "react";
import Tree from "./Tree";

export default function TreeMenuItems(props: { node: any, key: number}) {
  const [childVisible, setChildVisibility] = useState(false);

  const hasChild = props.node.children ? true : false;
  return (
    <li className="tree-menu-item-list">
      <div
        className="tree-menu-item"
        onClick={(e) => setChildVisibility((childVisible) => !childVisible)}
      >
        {hasChild && (
          <div className="icon-chevron">
            {childVisible ? (
              <ChevronDown />
            ) : (
              <ChevronUp className="rotate-icon" />
            )}
          </div>
        )}

        {hasChild ? "" : <DotMark className="dotMark" />}
        <div className="tree-menu-item-label">{props.node.label}</div>
      </div>

      {hasChild && childVisible && (
        <div className="tree-menu-item-child-container">
          <ul className="tree-menu-item-child-list">
            <Tree treeData={props.node.children} />
          </ul>
        </div>
      )}
    </li>
  );
}
