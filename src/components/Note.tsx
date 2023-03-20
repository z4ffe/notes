import {Box} from '@mui/material'
import React, {useContext} from 'react'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {NotesListContext} from '../providers/NotesListProvider'

const Note = () => {
   const {active, setActive} = useContext(NotesActiveContext)
   const {notes, setNotes} = useContext(NotesListContext)

   if (!active) return <Box />
   return <Box sx={{gridArea: 'note', width: '100%', height: '100%', backgroundColor: '#1E1E1E'}}>{notes[active - 1].text}</Box>
}

export default Note
