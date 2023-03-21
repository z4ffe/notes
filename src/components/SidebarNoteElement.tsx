import {Box, Typography} from '@mui/material'
import React, {useContext} from 'react'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {IListNotes} from '../providers/NotesListProvider'
import MarkdownRenderer from './MarkdownRenderer'

const SidebarNoteElement: React.FC<IListNotes> = ({id, text, date}): JSX.Element => {
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
            <Typography component='p' sx={{height: '40px'}}>
               <MarkdownRenderer markdown={text} />
            </Typography>
         </Box>
      </Box>
   )
}

export default SidebarNoteElement
