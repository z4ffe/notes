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
         <Box>
            <Typography component='p' sx={{fontWeight: '500'}}>
               {header}
            </Typography>
         </Box>
         <Box sx={{display: 'flex', overflow: 'hidden'}}>
            <Typography component='p'>{date}</Typography>
            <Typography component='p'>{text.slice(0, 25)}...</Typography>
         </Box>
      </Box>
   )
}

export default SidebarNoteElement

/* text.slice(0, 25) */
