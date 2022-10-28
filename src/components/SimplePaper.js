import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 230,
          height: 148,
        },
      }}
    >
      <Paper elevation={3} />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 230,
            height: 60,
          },
        }}
      >
        <Paper elevation={3} />
        <Paper elevation={3} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 230,
            height: 60,
          },
        }}
      >
        <Paper elevation={3} />
        <Paper elevation={3} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 230,
            height: 60,
          },
        }}
      >
        <Paper elevation={3} />
        <Paper elevation={3} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 230,
            height: 60,
          },
        }}
      >
        <Paper elevation={3} />
        <Paper elevation={3} />
      </Box>
    </Box>
  );
}
