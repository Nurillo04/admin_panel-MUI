import React from "react";
import { Actions } from "../../components";
import "./Student.scss";
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
  { id: 1, lastName: "Xoliqov", firstName: "Elyorjon", age: 18 },
  { id: 2, lastName: "Ahmedov ", firstName: "Diyorbek", age: 25 },
  { id: 3, lastName: "Umarov", firstName: "Saidakbar", age: 22 },
  { id: 4, lastName: "Xalilov", firstName: "Murodjon", age: 21 },
  { id: 5, lastName: "Ergashev", firstName: "Farxriddin", age: 19 },
  { id: 6, lastName: "Qahhorov", firstName: "Abdulhay", age: 14 },
  { id: 7, lastName: "Tolibov", firstName: "Ahror", age: 18 },
  { id: 8, lastName: "Ro`zmatov", firstName: "Shukurillo", age: 19 },
  { id: 9, lastName: "Abduraimov", firstName: "Umidjon", age: 17 },
];

const mappedRows = rows.map((row) => ({ ...row, actions: <Actions /> }));

const Students = () => {
  return (
    <div>
      <h1>Students</h1>
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
                  <Actions rows={rows} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
