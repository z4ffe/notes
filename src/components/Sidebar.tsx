import {Box, Button, Typography} from '@mui/material'
import React, {useContext} from 'react'
import trash from '../assets/images/trash.svg'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {NotesListContext} from '../providers/NotesListProvider'

const Sidebar = () => {
   const {notes, setNotes} = useContext(NotesListContext)
   const {active, setActive} = useContext(NotesActiveContext)

   const handleDeleteNote = (): void => {
      const newNotesList = notes.filter((el) => el.id !== active)
      setNotes(newNotesList)
   }

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            gridArea: 'sidebar',
            width: '310px',
            height: '100%',
            backgroundColor: '#262223',
            borderRight: '1px solid black',
         }}>
         <Box sx={{display: 'flex'}}>
            <Button disableRipple sx={{':hover': {backgroundColor: 'transparent'}}} onClick={handleDeleteNote}>
               <Box component='img' src={trash} />
            </Button>
         </Box>
         <Box>
            {notes.map((el) => (
               <Box key={el.id} onClick={() => setActive(el.id)}>
                  <Typography>{el.header}</Typography>
                  <Typography>{el.text}</Typography>
                  <Typography>{el.date}</Typography>
               </Box>
            ))}
         </Box>
      </Box>
   )
}

export default Sidebar
