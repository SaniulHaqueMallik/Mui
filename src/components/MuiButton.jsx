import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import {Button} from '@mui/material'

function MuiButton() {
  return (
    <div>
      <Button variant='contained' endIcon={<SendIcon/>}>Click</Button>
    </div>
  )
}

export default MuiButton
