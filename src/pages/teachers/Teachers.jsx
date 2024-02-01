import React from "react";
import { Actions } from "../../components";
import "./Teachers.scss";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Ahmadaliyev", firstName: "Dilshod", age: 35 },
  { id: 2, lastName: "Shermatov ", firstName: "Abduhalil", age: 42 },
  { id: 3, lastName: "Tolibov", firstName: "Ahror", age: 45 },
  { id: 4, lastName: "Salaydinov", firstName: "Kozim", age: 16 },
  { id: 5, lastName: "Abdullayev", firstName: "Hasan", age: 23 },
  { id: 6, lastName: "Turdaliyev", firstName: "Maruf", age: 15 },
  { id: 7, lastName: "Muhammedov", firstName: "Jahongir", age: 42 },
  { id: 8, lastName: "Shaydullayev", firstName: "Qobiljon", age: 53 },
  { id: 9, lastName: "Rasuljonov", firstName: "Sadullo", age: 65 },
];

const mappedRows = rows.map((row) => ({ ...row, actions: <Actions /> }));

const Teachers = () => {
  return (
    <div>
      <h1>Teachers</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mappedRows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Actions />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Teachers;
