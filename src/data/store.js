import { configureStore } from '@reduxjs/toolkit'
import Reducer from '../features/reducer/reducer'

export default configureStore({
  reducer: {
    state: Reducer,
  },
})


