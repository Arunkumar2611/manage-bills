import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CrudOperation() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="add" color="primary">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" color="primary">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}
