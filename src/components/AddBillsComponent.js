import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AddData } from '../actions';
import { connect } from 'react-redux';

const AlertDialog = (props) => {
  const { handleClose, open, items } = props

  const [data, setData] = useState({
    description: "",
    category:"",
    amount: "",
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "-" + month + "-" + year;

    const finalData = {
      ...data,
      id: items.length+1,
      date: newdate
    }
    // console.log("finalData", finalData);
    const { dispatch } = props;
    dispatch(AddData(finalData));
    handleClose()
  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Add Bills"}</DialogTitle>
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
  console.log(bills);
  return {
    loading: bills.loading,
    items: bills.data,
    error: bills.error,
  };
};

export default connect(mapStateToProps)(AlertDialog);
