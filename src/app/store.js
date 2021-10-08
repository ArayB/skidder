import { configureStore } from '@reduxjs/toolkit'
import skidderReducer from '../components/skidderSlice'

export default configureStore({
  reducer: {
    skidder: skidderReducer,
  },
})
