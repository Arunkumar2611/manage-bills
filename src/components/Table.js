import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { connect } from "react-redux";
import EditAndDelete from "./CrudOperation";
import AddIcon from "@mui/icons-material/Add";
import { fetchData } from "../actions";
import AddBillsComponent from "./AddBillsComponent";
import SearchBar from "material-ui-search-bar";

const ColumnGroupingTable = (props) => {
  const { loading, items, error } = props;
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState(items);
  const [searched, setSearched] = useState("");
  // const [category, setCategory] = React.useState('');

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setRows(items);
  }, [items]);

  const handleFilterChange = (event) => {
    const filteredRows = items.filter((row) => {
      return row.category === event.target.value;
    });
    // console.log(filteredRows);
    setRows(filteredRows);
  };

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

  const requestSearch = (searchedVal) => {
    const filteredRows = items.filter((row) => {
      return row.description.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
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
          <EditAndDelete row={row} />
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
                  <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                  />
                </Paper>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <FormControl sx={{ width: 300 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={category}
                    label="Category"
                    onChange={handleFilterChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {items.map((name) => (
                      <MenuItem key={name.id} value={name.category}>
                        {name.category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
                <AddBillsComponent open={open} handleClose={handleClose} />
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
            {rows
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
        count={rows.length}
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
