import {Box, Button} from '@mui/material'
import React, {useContext, useState} from 'react'
import trash from '../assets/images/trash.svg'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {NotesListContext} from '../providers/NotesListProvider'
import DeleteModal from './DeleteModal'
import SidebarNoteElement from './SidebarNoteElement'

const Sidebar = () => {
   const {notes, setNotes} = useContext(NotesListContext)
   const {active, setActive} = useContext(NotesActiveContext)
   const [open, setOpen] = useState(false)

   const handleDeleteModal = (): void => {
      if (active) setOpen(!open)
   }

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            gridArea: 'sidebar',
            width: '310px',
            height: '100%',
            backgroundColor: '#262223',
            borderRight: '1px solid black',
         }}>
         <Box sx={{display: 'flex'}}>
            <Button disableRipple sx={{':hover': {backgroundColor: 'transparent'}}} onClick={handleDeleteModal}>
               <Box component='img' src={trash} />
            </Button>
         </Box>
         <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {notes.map((el) => (
               <SidebarNoteElement key={el.id} {...el} />
            ))}
         </Box>
         <DeleteModal open={open} setOpen={setOpen} />
      </Box>
   )
}

export default Sidebar
