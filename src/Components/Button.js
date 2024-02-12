import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ButtonUsage() {
  return(
  <>
  <Button variant="contained">Hello world</Button><br></br>
  <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
 </ButtonGroup>
  </>)





}