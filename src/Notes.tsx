import {Box, ThemeProvider} from '@mui/material'
import React from 'react'
import Note from './components/Note'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import NotesActiveProvider from './providers/NotesActiveProvider'
import NotesListProvider from './providers/NotesListProvider'
import mainTheme from './themes/mainTheme'

const Notes = () => {
   return (
      <NotesListProvider>
         <NotesActiveProvider>
            <ThemeProvider theme={mainTheme}>
               <Box
                  sx={{
                     display: 'grid',
                     gridTemplateColumns: '311px 1fr',
                     gridTemplateRows: '50px 1fr',
                     gridTemplateAreas: `"sidebar topbar" "sidebar note"`,
                     width: '1390px',
                     height: '798px',
                     borderRadius: '10px',
                     border: '1px solid #504D4E',
                     backgroundColor: '#262223',
                     overflow: 'hidden',
                  }}>
                  <Sidebar />
                  <Topbar />
                  <Note />
               </Box>
            </ThemeProvider>
         </NotesActiveProvider>
      </NotesListProvider>
   )
}

export default Notes
