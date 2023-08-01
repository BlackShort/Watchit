import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';


export const Loader = () => {
  return (
    <Box>
      <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
        <CircularProgress />
      </Stack>
    </Box>)
}
