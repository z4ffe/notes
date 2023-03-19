import {Box, Typography} from '@mui/material'
import React, {useContext} from 'react'
import {NotesListContext} from '../providers/NotesProvider'

const Sidebar = () => {
   const {notes, setNotes} = useContext(NotesListContext)
   return (
      <Box sx={{gridArea: 'sidebar', width: '310px', height: '100%', backgroundColor: '#262223', borderRight: '1px solid black'}}>
         {notes.map((el) => (
            <Box key={el.id}>
               <Typography>{el.header}</Typography>
               <Typography>{el.text}</Typography>
               <Typography>{el.date}</Typography>
            </Box>
         ))}
      </Box>
   )
}

export default Sidebar
