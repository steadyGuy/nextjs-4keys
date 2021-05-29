import React, { useState } from 'react'
import { Dialog } from '../Dialog'

export const DialogWarning = ({ title, openDialog, handleOnOpenDialog, children }) => {

  return (
    <Dialog
      id='warning_dialog'
      isOpen={openDialog}
      onClose={handleOnOpenDialog}
      title={title}
    >
      {children}
    </Dialog>
  )
}
