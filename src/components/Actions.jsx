import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import { useState } from "react";

const Actions = ({ rows }) => {
  const [students, setStudents] = useState([]);

  const deleteStudent = (id) => {
    if (confirm("Are you sure you want to delete this Student?")) {
      const newStudent = rows.filter((cn) => cn.id !== id);
      setStudents(newStudent);
      localStorage.setItem("rows", JSON.stringify(newStudent));
    }
  };
  return (
    <Stack direction="row" spacing={3}>
      <IconButton color="warning">
        <EditIcon />
      </IconButton>
      <IconButton color="error">
        <DeleteIcon onClick={() => deleteStudent(rows.id)} />
      </IconButton>
    </Stack>
  );
};

export default Actions;
