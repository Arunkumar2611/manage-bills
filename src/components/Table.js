import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchComponent from "./SearchComponent";
import { connect } from "react-redux";
import CrudOperation from "./CrudOperation";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Filter from "./Filter";
import { fetchData } from "../actions";
import AlertDialog from "./AddBillsComponent";

const ColumnGroupingTable = (props) => {
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchData());
  }, []);

  const { loading, items, error } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleClose();
  };

  const Showing = (row) => {
    const { id, description, category, amount, date } = row.row;
    return (
      <TableRow
        hover
        tabIndex={-1}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>{id}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>
          <CrudOperation row={row} />
        </TableCell>
      </TableRow>
    );
  };

  if (loading) return <span>loading...</span>;
  if (error) return <span>error!</span>;

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <Paper>
                  <SearchComponent />
                </Paper>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Paper>
                  <Filter />
                </Paper>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Button variant="contained" onClick={handleClickOpen} startIcon={<AddIcon />}>
                  Add
                </Button>
                <AlertDialog open={open} handleClose={handleClose} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return <Showing key={row.id} row={row} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const { bills } = state;
  return {
    loading: bills.loading,
    items: bills.data,
    error: bills.error,
  };
};

export default connect(mapStateToProps)(ColumnGroupingTable);
