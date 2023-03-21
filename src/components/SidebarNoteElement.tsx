import {Box, Typography} from '@mui/material'
import React, {useContext} from 'react'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {IListNotes} from '../providers/NotesListProvider'

const SidebarNoteElement: React.FC<IListNotes> = ({id, header, text, date}): JSX.Element => {
   const {active, setActive} = useContext(NotesActiveContext)

   return (
      <Box
         onClick={() => setActive(id)}
         sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            width: '90%',
            padding: '10px',
            height: '75px',
            transition: '.2s',

            backgroundColor: `${active === id ? '#007AFF' : 'transparent'}`,
         }}>
         <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
            <Typography component='p'>{date}</Typography>
            <Typography component='p'>{text.length > 28 ? `${text.slice(0, 28)}...` : text}</Typography>
         </Box>
      </Box>
   )
}

export default SidebarNoteElement
