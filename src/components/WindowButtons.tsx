import {Box} from '@mui/material'
import React from 'react'

const WindowButtons = () => {
   return (
      <Box sx={{display: 'flex', height: '100%', alignItems: 'center', gap: '7px', paddingLeft: '15px'}}>
         <Box
            sx={{
               background: '#ff5c5c',
               fontSize: '9pt',
               width: '13px',
               height: '13px',
               border: '1px solid #e33e41',
               borderRadius: '50%',
            }}
         />
         <Box
            sx={{
               background: '#ffbd4c',
               fontSize: '9pt',
               width: '13px',
               height: '13px',
               border: '1px solid #e33e41',
               borderRadius: '50%',
            }}
         />
         <Box
            sx={{
               background: '#00ca56',
               fontSize: '9pt',
               width: '13px',
               height: '13px',
               border: '1px solid #e33e41',
               borderRadius: '50%',
            }}
         />
      </Box>
   )
}

export default WindowButtons
