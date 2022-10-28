import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AlertDialog(props) {
    const { handleClose, open } = props
  const [data, setData] = useState({
    description: "",
    category:"",
    amount: "",
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    console.log("data", data);
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
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClick}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
