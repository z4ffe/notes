import {Box, Button, Modal, Typography} from '@mui/material'
import React, {Dispatch, SetStateAction, useContext} from 'react'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {NotesListContext} from '../providers/NotesListProvider'

interface IProps {
   open: boolean
   setOpen: Dispatch<SetStateAction<boolean>>
}

const DeleteModal: React.FC<IProps> = ({open, setOpen}) => {
   const {active, setActive} = useContext(NotesActiveContext)
   const {notes, setNotes} = useContext(NotesListContext)

   const handleDeleteNote = () => {
      const newNotesList = notes.filter((el) => el.id !== active)
      setNotes(newNotesList)
      setActive(null)
      setOpen(!open)
   }

   return (
      <Modal open={open} onClose={() => setOpen(!open)} sx={{display: 'flex'}} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               margin: 'auto',
               width: '300px',
               height: '150px',
               backgroundColor: '#202020',
               borderRadius: '8px',
               alignItems: 'center',
               justifyContent: 'center',
            }}>
            <Typography id='modal-modal-title' component='p' sx={{fontSize: '14px'}}>
               This note will be deleted.
            </Typography>
            <Typography id='modal-modal-title' component='p' sx={{fontSize: '14px'}}>
               This action cannot be undone.
            </Typography>
            <Box sx={{display: 'flex', width: '100%', flexDirection: 'column'}}>
               <Button
                  onClick={handleDeleteNote}
                  sx={{
                     width: '100%',
                     marginTop: '15px',
                     fontWeight: '400',
                     color: '#E85444',
                     borderTop: '1px solid #626362',
                  }}
                  disableRipple>
                  Delete note
               </Button>
               <Button onClick={() => setOpen(!open)} sx={{fontWeight: '500', color: '#DBB13D', borderTop: '1px solid #626362'}} disableRipple>
                  Cancel
               </Button>
            </Box>
         </Box>
      </Modal>
   )
}

export default DeleteModal
