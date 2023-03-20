import React, {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from 'react'

type ChildrenProps = {
   children: ReactNode
}

export interface IListNotes {
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

   useEffect(() => {
      const tempArr = [
         {
            id: 1,
            header: 'Header',
            text: 'localStorage',
            date: new Date().toLocaleDateString().replaceAll('/', '.'),
         },
      ]
      localStorage.setItem('notes', JSON.stringify(tempArr))
      const localData = localStorage.getItem('notes') as string
      if (localData) setNotes(JSON.parse(localData))
   }, [])

   return <NotesListContext.Provider value={{notes, setNotes}}>{children}</NotesListContext.Provider>
}

export default NotesListProvider
