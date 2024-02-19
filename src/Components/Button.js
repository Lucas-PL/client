import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ButtonUsage() {
  return(
  <>
  <Button variant="contained">Hello world</Button><br></br>
  <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>01</Button>
      <Button>02</Button>
      <Button>03</Button>
      
 </ButtonGroup>
  </>)





}