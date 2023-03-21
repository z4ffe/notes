import {Box, Button} from '@mui/material'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {NotesActiveContext} from '../providers/NotesActiveProvider'
import {IListNotes, NotesListContext} from '../providers/NotesListProvider'
import MarkdownRenderer from './MarkdownRenderer'

const Note = () => {
   const {active, setActive} = useContext(NotesActiveContext)
   const {notes, setNotes} = useContext(NotesListContext)
   const [value, setValue] = useState('')
   const [editable, setEditable] = useState<boolean>(false)
   const textAreaRef = useRef<HTMLTextAreaElement | any>()

   useEffect(() => {
      if (active && notes.length) setValue(notes.find(({id}) => id === active)!.text)
      return () => setValue('')
   }, [active])

   const handleTextArea = (edited?: string) => {
      if (!edited) setValue(textAreaRef.current.value)
      const modifiedNotesArr = [...notes]
      const currentNote = notes.find(({id}) => id === active) as IListNotes
      const noteIndex = notes.indexOf(currentNote)
      currentNote.text = edited || value
      modifiedNotesArr.splice(noteIndex, 1, currentNote)
      setNotes(modifiedNotesArr)
   }

   const handleTextSelect = () => {
      const {selectionStart} = textAreaRef.current
      const editedValue = [...value]
      editedValue.splice(selectionStart, 0, '## ')
      const edited = editedValue.join('')
      setValue(edited)
      handleTextArea(edited)
   }

   if (!active || !notes.length) return <Box />
   return (
      <Box>
         <Button onClick={handleTextSelect}>Header</Button>
         {editable && <Button onClick={() => setEditable(false)}>Done</Button>}
         {active && notes.length && !editable ? (
            <Box
               sx={{
                  gridArea: 'note',
                  width: '100%',
                  height: '100%',
                  fontFamily: 'SF Pro Display, sans-serif',
                  backgroundColor: '#1E1E1E',
               }}
               onClick={() => setEditable(!editable)}>
               <Box sx={{padding: '10px', fontSize: '18px'}}>
                  <MarkdownRenderer markdown={notes.find(({id}) => id === active)!.text} />
               </Box>
            </Box>
         ) : (
            <Box
               component='form'
               sx={{
                  gridArea: 'note',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1E1E1E',
               }}>
               <textarea
                  style={{
                     width: '100%',
                     height: '100%',
                     padding: '10px',
                     backgroundColor: 'transparent',
                     border: 'none',
                     outline: 'none',
                     resize: 'none',
                     fontFamily: 'SF Pro Display, sans-serif',
                     fontSize: '18px',
                  }}
                  // onBlur={() => setEditable(false)}
                  onInput={() => handleTextArea()}
                  ref={textAreaRef}
                  value={value}
               />
            </Box>
         )}
      </Box>
   )
}

export default Note
