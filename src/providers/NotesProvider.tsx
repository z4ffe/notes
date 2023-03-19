import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'

type ChildrenProps = {
   children: ReactNode
}

interface INotes {
   id: number
   header: string
   text: string
   date: string
}

export interface INotesContext {
   notes: INotes[]
   setNotes: Dispatch<SetStateAction<INotes[] | any>>
}

export const NotesListContext = createContext<INotesContext>({
   notes: [],
   setNotes: () => {},
})

const NotesProvider: React.FC<ChildrenProps> = ({children}): JSX.Element => {
   const [notes, setNotes] = useState([])

   return <NotesListContext.Provider value={{notes, setNotes}}>{children}</NotesListContext.Provider>
}

export default NotesProvider
