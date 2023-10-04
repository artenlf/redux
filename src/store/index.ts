import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export const store = configureStore({
  reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
