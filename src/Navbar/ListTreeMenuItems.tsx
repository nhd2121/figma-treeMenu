export interface treeDataType {
  key: string;
  label: string;
  icon?: string;
  title: string;
  children?: treeDataType[];
}

export const treeDatas: treeDataType[] = [
  {
    key: "0",
    label: "Documents",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Document-0-3.doc",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Document-0-4.doc",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        title: "Documents Folder",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    title: "Downloads Folder",
    children: [],
  },
];
