import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../api/helpers';

function hasNoValue(value) {
  return value === null
    || value === undefined
    || String(value).trim() === ''
    || value === 'null'
    || value === 'undefined';
}

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async (_, { rejectWithValue }) => {
    try {
      const vehiclesInfoList = await request('/api/vehicles.json');
      const vehiclesDetailedList = await Promise.all(vehiclesInfoList.map(async (vehicle) => {
        // Validate apiUrl and skip vehicle if: value not present
        if (hasNoValue(vehicle.apiUrl)) {
          return null;
        }
        try {
          const vehicleDetails = await request(vehicle.apiUrl);
          // Validate price and skip vehicle if: value not present
          if (hasNoValue(vehicleDetails.price)) {
            return null;
          }

          return {
            apiUrl: vehicle.apiUrl,
            price: vehicleDetails.price,
            ...(vehicle.media && { media: vehicle.media }),
            ...(vehicleDetails.id && { id: vehicleDetails.id }),
            ...(vehicleDetails.description && { description: vehicleDetails.description }),
            ...(vehicleDetails.meta && { meta: vehicleDetails.meta })
          };
        } catch (error) {
          // Skip vehicle if: broken apiUrl or failed request
          return null;
        }
      }));
      return vehiclesDetailedList.filter((vehicle) => vehicle != null);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }

);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    loading: false,
    error: null,
    activeVehicle: null
  },
  reducers: {
    setActiveVehicle: (state, action) => {
      return { ...state, activeVehicle: action.payload };
    },
    clearActiveVehicle: (state) => {
      return { ...state, activeVehicle: null };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          vehicles: action.payload,
          error: null,
        };
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  }
});

export const { setActiveVehicle, clearActiveVehicle } = vehiclesSlice.actions;

export const selectVehicles = (state) => state.vehicles;

export default vehiclesSlice.reducer;
