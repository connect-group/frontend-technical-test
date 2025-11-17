import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from './slices/vehicleSlice';

const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
  },
});

export default store;
