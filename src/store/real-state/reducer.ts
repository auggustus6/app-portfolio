/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RealStateData } from 'utils/types/realState';
import { LOAD_DATA, LOAD_DATA_BY_FILTER } from './action';


export type RealStateProps = {
  loading: boolean;
  error: any;
  page: number;
  data: RealStateData[];
  property: RealStateData;
}

const INITIAL_STATE: RealStateProps = {
  loading: false,
  error: '',
  page: 1,
  data: [],
  property: {} as RealStateData,
};

export type FilterProps = {
  address:string;
  bedrooms:number;
  bathrooms:number;
  price: number;
  parkingSpaces: number;
}

const filterProperties = (state: RealStateData[], action: PayloadAction<FilterProps>) => {
  const { address, bedrooms, bathrooms, parkingSpaces, price } = action.payload;

  return state.filter(property => {
    return (
      address && (property.address.formattedAddress.toLowerCase().includes(address.toLowerCase())) ||
      property.bedrooms === bedrooms &&
      property.bathrooms === bathrooms &&
      property.parkingSpaces === parkingSpaces &&
      (property.price >= price && property.price <= price)
    );
  });
};


export const realStateReducer = createSlice({
  name: 'properties',
  initialState: INITIAL_STATE,
  reducers: {
    loadPropertyById: (state, action:PayloadAction<string>) => {
      state.property = state.data.find(item => item.id === action.payload)!;
    },
    clearProperty: (state) => {
      state.property = {} as RealStateData;
    },
    loadDataByFilterSuccess: (state, action:PayloadAction<FilterProps>) => {
      state.data = filterProperties(state.data, action);
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LOAD_DATA.pending, (state) => {
        state.loading = true;
      })
      .addCase(LOAD_DATA.fulfilled, (state, action:PayloadAction<RealStateData[]>) => {
        state.loading = false;
        state.data = action.payload.filter(property => {
          if (property.publish && property.address.geolocation){
            return property;
          }
        }).sort((a,b) => b.price - a.price);
      })
      .addCase(LOAD_DATA.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error;
      });

      builder
      .addCase(LOAD_DATA_BY_FILTER.pending, (state) => {
        state.loading = true;
      })
      .addCase(LOAD_DATA_BY_FILTER.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(LOAD_DATA_BY_FILTER.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { loadPropertyById, clearProperty, loadDataByFilterSuccess } = realStateReducer.actions;
export default realStateReducer;
