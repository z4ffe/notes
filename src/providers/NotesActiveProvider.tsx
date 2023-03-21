import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'

type ChildrenProps = {
   children: ReactNode
}

export interface INotesContext {
   active: string
   setActive: Dispatch<SetStateAction<number | any>>
}

export const NotesActiveContext = createContext<INotesContext>({
   active: '',
   setActive: () => {},
})

const NotesActiveProvider: React.FC<ChildrenProps> = ({children}): JSX.Element => {
   const [active, setActive] = useState('')

   return <NotesActiveContext.Provider value={{active, setActive}}>{children}</NotesActiveContext.Provider>
}

export default NotesActiveProvider
