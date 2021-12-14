/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import { FilterProps, loadDataByFilterSuccess } from './reducer';

const timeout = () => new Promise<void>((resolve) => setTimeout(() => { resolve(); }, 5000));


export const LOAD_DATA = createAsyncThunk(
    '@real/LOAD_DATA',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('challenge');
            return response.data;
        } catch (err) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
        }
    });

export const LOAD_DATA_BY_FILTER = createAsyncThunk(
    '@real/LOAD_DATA_BY_FILTER_',
    async (data:FilterProps, { rejectWithValue, dispatch }) => {
        try {
            await timeout();
            dispatch(loadDataByFilterSuccess(data));
        } catch (err) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
        }
    });
