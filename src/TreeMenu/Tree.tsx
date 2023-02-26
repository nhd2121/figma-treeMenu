import "./Tree.scss";
import TreeMenuItems from "./TreeMenuItems";
import { treeDataType } from "./ListTreeMenuItems";

export default function Tree(props: { treeData: treeDataType[] | undefined }) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <ul className="tree-items">
            {props.treeData?.map((treeMenu: treeDataType, key: number) => {
              return <TreeMenuItems node={treeMenu} key={key} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
