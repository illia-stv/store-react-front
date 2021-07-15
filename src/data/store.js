import { configureStore } from '@reduxjs/toolkit'
import Reducer from '../reducer/reducer'

export default configureStore({
  reducer: {
    state: Reducer,
  },
})


