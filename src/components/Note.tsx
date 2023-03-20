import {Box} from '@mui/material'
import React, {useContext, useRef} from 'react'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {IListNotes, NotesListContext} from '../providers/NotesListProvider'

const Note = () => {
   const {active} = useContext(NotesActiveContext)
   const {notes, setNotes} = useContext(NotesListContext)
   const editableDiv = useRef<HTMLDivElement>()

   const handleTextEdit = () => {
      const currentNote = notes.find(({id}) => id === active) as IListNotes
      currentNote.text = editableDiv.current!.innerText
      const currentNoteIndex = notes.indexOf(currentNote)
      const tempNotesArr = [...notes]
      tempNotesArr.splice(currentNoteIndex, 1, currentNote)
      setNotes(tempNotesArr)
   }

   if (!active || !notes.length) return <Box />
   return (
      <Box
         component='div'
         contentEditable
         onInput={handleTextEdit}
         ref={editableDiv}
         sx={{
            gridArea: 'note',
            width: '100%',
            height: '100%',
            backgroundColor: '#1E1E1E',
         }}>
         {notes.find(({id}) => id === active)!.text}
      </Box>
   )
}

export default Note
