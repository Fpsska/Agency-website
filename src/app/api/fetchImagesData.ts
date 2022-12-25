import { createAsyncThunk } from '@reduxjs/toolkit';

// /. imports

export const fetchImagesData = createAsyncThunk(
    'gallerySlice/fetchImagesData',
    async (_, { rejectWithValue }) => {
        const pageNumber = Math.floor(Math.random() * (10 - 1)) + 1;
        const URL = `https://api.unsplash.com/search/photos/?client_id=7qBZMJtsb638mTv6UpQozhM0hW0dTxCWY-vSSvcJAHQ&query=content_filter=high&orientation=portrait&page=${pageNumber}`;

        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Response: server error!');
            }

            const data = await response.json();

            return data.results;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);
