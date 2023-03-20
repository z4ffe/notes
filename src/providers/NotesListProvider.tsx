import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'

type ChildrenProps = {
   children: ReactNode
}

interface IListNotes {
   id: number
   header: string
   text: string
   date: string
}

export interface INotesContext {
   notes: IListNotes[]
   setNotes: Dispatch<SetStateAction<IListNotes[] | any>>
}

export const NotesListContext = createContext<INotesContext>({
   notes: [],
   setNotes: () => {},
})

const NotesListProvider: React.FC<ChildrenProps> = ({children}): JSX.Element => {
   const [notes, setNotes] = useState([])

   return <NotesListContext.Provider value={{notes, setNotes}}>{children}</NotesListContext.Provider>
}

export default NotesListProvider
