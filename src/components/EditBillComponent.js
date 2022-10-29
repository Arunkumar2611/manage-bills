import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { EditBills } from '../actions';


const EditBillComponent = (props) => {
  const { handleClose, open, row, items } = props
  const { description, category, amount, id } = row.row;

  const [data, setData] = useState({
    description: description,
    category: category,
    amount: amount,
    id: id
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "-" + month + "-" + year;

    const finalData = {
      ...data,
      date: newdate
    }

    const { dispatch } = props;
    dispatch(EditBills(finalData));
    handleClose()
  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Edit Bills"}</DialogTitle>
        <DialogContent>
        <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <div>
        <TextField
          name="description"
          label="Description"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="category"
          label="Category"
          placeholder="Category"
          value={data.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="amount"
          label="Amount"
          placeholder="Amount"
          value={data.amount}
          onChange={handleChange}
        />
      </div>
    </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleClick}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
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

export default connect(mapStateToProps)(EditBillComponent);
