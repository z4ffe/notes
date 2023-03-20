import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'

type ChildrenProps = {
   children: ReactNode
}

export interface INotesContext {
   active: number | null
   setActive: Dispatch<SetStateAction<number | any>>
}

export const NotesActiveContext = createContext<INotesContext>({
   active: null,
   setActive: () => {},
})

const NotesActiveProvider: React.FC<ChildrenProps> = ({children}): JSX.Element => {
   const [active, setActive] = useState(null)

   return <NotesActiveContext.Provider value={{active, setActive}}>{children}</NotesActiveContext.Provider>
}

export default NotesActiveProvider
