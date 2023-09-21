import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, IconButton, Stack } from "@mui/material";

function MuiButton() {
  return (
    <div>
      <Stack spacing={4}>  {/* default value of display in stack -> display:flex */}
        
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Contained
          </Button>
          <Button variant="text" endIcon={<SendIcon />}>
            Text
          </Button>
          <Button variant="outlined">Outlined</Button>
          <IconButton color="success" size="small"><SendIcon/></IconButton>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </Stack>

        <Stack display='block' direction='row' spacing={2}>
          <Button variant="contained" size="small" disableRipple>Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
          <Button variant="contained" size="large" disableElevation>Large</Button>
        </Stack>

        
      </Stack>
    </div>
  );
}

export default MuiButton;
