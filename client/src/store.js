import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import nomadAdvisorData from './redux/nomadAdvisorData';


export default configureStore({
  reducer: {
    counter: counterReducer,
    nomadAdvisorData: nomadAdvisorData
  }
})



