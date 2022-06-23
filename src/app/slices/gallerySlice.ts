import { createSlice, PayloadAction, createAsyncThunk, current } from '@reduxjs/toolkit';

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
    filteredGalleryData: galleryCardsTypes[],
    status: string,
    error: string
}

// /. interfaces

const initialState: gallerySliceState = {
    galleryCards: [],
    filteredGalleryData: [],
    status: '',
    error: ''
};

// /. initialState

const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState,
    reducers: {
        setCardActiveStatus(state, action: PayloadAction<{ id: string, status: boolean }>) {
            const { id, status } = action.payload;
            state.galleryCards.forEach(item => {
                if (item.id === id) {
                    item.isActive = status;
                } else {
                    item.isActive = false;
                }
            });
        },
        filterGalleryByCategory(state, action: PayloadAction<{ category: string }>) {

            const { category } = action.payload;

            switch (category) {
                case 'all':
                    state.galleryCards = state.filteredGalleryData.filter(item => item.category.toLocaleLowerCase() !== category);
                    break;
                case 'design':
                    state.galleryCards = state.filteredGalleryData.filter(item => item.category.toLocaleLowerCase() === category);
                    break;
                case 'branding':
                    state.galleryCards = state.filteredGalleryData.filter(item => item.category.toLocaleLowerCase() === category);
                    break;
                case 'illustration':
                    state.galleryCards = state.filteredGalleryData.filter(item => item.category.toLocaleLowerCase() === category);
                    break;
                case 'motion':
                    state.galleryCards = state.filteredGalleryData.filter(item => item.category.toLocaleLowerCase() === category);
                    break;
            }
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
                        image: item.urls.regular || noImage,
                        isActive: false
                    }
                );
            });
            state.filteredGalleryData = state.galleryCards;
        },
        [fetchImagesData.rejected.type]: (state) => {
            state.status = 'failed';
        }
    }
});

export const {
    setCardActiveStatus,
    filterGalleryByCategory
} = gallerySlice.actions;

export default gallerySlice.reducer;