import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditBillComponent from "./EditBillComponent";

export default function CrudOperation() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleClose();
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="add" color="primary" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <EditBillComponent open={open} handleClose={handleClose} />
      <IconButton aria-label="delete" color="primary">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}
