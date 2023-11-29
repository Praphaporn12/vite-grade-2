import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from '../Components/Slice'

const Store = configureStore({
  reducer: {
    data: SliceReducer,
  },
})

export default Store