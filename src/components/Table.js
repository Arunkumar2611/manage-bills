import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchComponent from './SearchComponent';
import { data } from '../data';
import CrudOperation from './CrudOperation';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Filter from './Filter';

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Showing = (row) => {
    const { id, description, category, amount, date } = row.row;
    console.log(row);
    return (
      <TableRow
        hover role="checkbox" tabIndex={-1} key={row.code}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell >{id}</TableCell>
        <TableCell >{description}</TableCell>
        <TableCell >{category}</TableCell>
        <TableCell >{amount}</TableCell>
        <TableCell >{date}</TableCell>
        <TableCell ><CrudOperation /></TableCell>

      </TableRow>
    )
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <Paper><SearchComponent /></Paper>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Paper><Filter /></Paper>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Button variant="contained" startIcon={<AddIcon />}>
                  Add
                </Button>
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
            {data?.bills
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <Showing row={row} />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.bills.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
