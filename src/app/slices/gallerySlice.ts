import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { galleryCardsTypes } from '../../Types/gallerySliceTypes';

import { getRandomCategory } from '../../helpers/getRandomCategory';

import noImage from '../../assets/images/image-placeholder.png';

// /. imports

export const fetchImagesData = createAsyncThunk(
    'tableSlice/fetchUsersData',
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

// /. AsyncThunk

interface gallerySliceState {
    galleryCards: galleryCardsTypes[],
    status: string,
    error: string
}

// /. interfaces

const initialState: gallerySliceState = {
    galleryCards: [],
    status: '',
    error: ''
};

// /. initialState

const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState,
    reducers: {
        setActiveStatus(state, action:PayloadAction<{id: string, status: boolean}>) {
            state.galleryCards.forEach(item => {
                if (item.id === action.payload.id) {
                    item.isActive = action.payload.status;
                } else {
                    item.isActive = false;
                }
            });
        }
    },
    extraReducers: {
        [fetchImagesData.pending.type]: (state) => {
            state.status = 'loading';
        },
        [fetchImagesData.fulfilled.type]: (
            state,
            action: PayloadAction<any>
        ) => {
            state.status = 'success';

            action.payload.forEach((item: any) => {
                state.galleryCards.push(
                    {
                        id: `${Math.random() + item.id}`,
                        category: getRandomCategory([
                            'Design',
                            'Branding',
                            'illustration',
                            'Motion'
                        ]),
                        text: item.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        image: item.urls.regulr || noImage,
                        isActive: false
                    }
                );
            });
        },
        [fetchImagesData.rejected.type]: (state) => {
            state.status = 'failed';
        }
    }
});

export const {
    setActiveStatus
} = gallerySlice.actions;

export default gallerySlice.reducer;