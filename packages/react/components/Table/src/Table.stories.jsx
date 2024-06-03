import react from "react";
import Table from "./Table";

export default {
    title: "Table",
    component: Table,
};

export const TableDesign = () => <Table

columns={[
    { Header: "Author", accessor: "autorName" },
    { Header: "Role", accessor: "rolename" },
    { Header: "Status", accessor: "status" },
    { Header: "Employed", accessor: "employed" },
    { Header: "Actions", accessor: "actions" },
  ]}
  tableData={[
    {
      autorName: "Iyappan",
      rolename: "Manager",
      status: "Online",
      employed: "23/04/18",
      actions: "Edit",
    },
    {
      autorName: "Suji",
      rolename: "Developer",
      status: "Offline",
      employed: "23/04/18",
      actions: "Edit",
    },
    {
      autorName: "Tanuja",
      rolename: "Developer",
      status: "Online",
      employed: "23/04/18",
      actions: "Edit",
    },
    {
      autorName: "Anil",
      rolename: "Developer",
      status: "Online",
      employed: "23/04/18",
      actions: "Edit",
    },
  ]}
  title="Table Title"
  />