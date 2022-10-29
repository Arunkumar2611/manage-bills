import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditBillComponent from "./EditBillComponent";
import { connect } from "react-redux";
import { DeleteBills } from "../actions";

const CrudOperation = (props) => {
  const {row, dispatch} = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleClose();
  };

  const handleDeleteClick = () => {
    dispatch(DeleteBills(row.row.id));
  }

  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="add" color="primary" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <EditBillComponent open={open} handleClose={handleClose} row={row} />
      <IconButton aria-label="delete" color="primary" onClick={handleDeleteClick}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}

const mapStateToProps = (state) => {
  const { bills } = state;
  return {
    loading: bills.loading,
    items: bills.data,
    error: bills.error,
  };
};

export default connect(mapStateToProps)(CrudOperation);
