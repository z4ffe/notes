import React, {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useLayoutEffect, useState} from 'react'

type ChildrenProps = {
   children: ReactNode
}

export interface IListNotes {
   id: string
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

   useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
   }, [notes])

   useLayoutEffect(() => {
      const localData = localStorage.getItem('notes') as string
      if (localData) setNotes(JSON.parse(localData))
   }, [])

   return <NotesListContext.Provider value={{notes, setNotes}}>{children}</NotesListContext.Provider>
}

export default NotesListProvider
