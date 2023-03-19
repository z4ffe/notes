import {Box, Button} from '@mui/material'
import React, {useContext} from 'react'
import {NotesListContext} from '../providers/NotesProvider'

const Topbar = () => {
   const {notes, setNotes} = useContext(NotesListContext)

   const addNewNote = () => {
      const modifiedList = [...notes]
      modifiedList.push({id: modifiedList.length + 1, header: 'asdsad', text: 'asdsad', date: 'asdsad'})
      setNotes(modifiedList)
   }

   return (
      <Box sx={{gridArea: 'topbar', width: '100%', height: '50px', backgroundColor: '#242122'}}>
         <Button onClick={addNewNote}>Add Note</Button>
      </Box>
   )
}

export default Topbar
