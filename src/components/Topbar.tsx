import {Box, Button} from '@mui/material'
import React, {useContext} from 'react'
import newNote from '../assets/images/new-note.svg'
import fontStyle from '../assets/images/font-style.svg'
import {NotesListContext} from '../providers/NotesListProvider'

const Topbar = () => {
   const {notes, setNotes} = useContext(NotesListContext)

   const addNewNote = () => {
      const modifiedList = [...notes]
      modifiedList.push({
         id: crypto.randomUUID(),
         text: '',
         date: new Date().toLocaleDateString().replaceAll('/', '.'),
      })
      setNotes(modifiedList)
   }

   return (
      <Box
         sx={{
            gridArea: 'topbar',
            display: 'flex',
            width: '100%',
            height: '50px',
            backgroundColor: '#242122',
            alignItems: 'center',
         }}>
         <Button onClick={addNewNote} disableRipple sx={{':hover': {backgroundColor: 'transparent'}}}>
            <Box component='img' src={newNote} />
         </Button>
         <Button disableRipple sx={{':hover': {backgroundColor: 'transparent'}}}>
            <Box component='img' src={fontStyle} />
         </Button>
      </Box>
   )
}

export default Topbar
