import { createContext } from 'react'
import { DrawerContextType } from '../../types/drawer'

export const DrawerContext = createContext<DrawerContextType | undefined>(undefined)
