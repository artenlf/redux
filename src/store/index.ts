import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { player } from './slices/player'

export const store = configureStore({
  reducer: {
    player,
  },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
