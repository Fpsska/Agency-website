import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { galleryCardsTypes, galleryNavTemplateTypes } from '../../Types/gallerySliceTypes';

import { getRandomCategory } from '../../helpers/getRandomElement';

import placeholder_image from '../../assets/images/placeholder_image.jpg';

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

// /. AsyncThunk

interface gallerySliceState {
    galleryCards: galleryCardsTypes[],
    galleryNavTemplate: galleryNavTemplateTypes[],
    status: string,
    error: string,
    isDataLoading: boolean,
    SelectDefaultValue: string,
    filterBy: string
}

// /. interfaces

const initialState: gallerySliceState = {
    galleryCards: [],
    galleryNavTemplate: [
        {
            id: '1',
            text: 'Show All',
            category: 'all',
            isActive: true
        },
        {
            id: '2',
            text: 'Design',
            category: 'design',
            isActive: false
        },
        {
            id: '3',
            text: 'Branding',
            category: 'branding',
            isActive: false
        },
        {
            id: '4',
            text: 'Illustration',
            category: 'illustration',
            isActive: false
        },
        {
            id: '5',
            text: 'Motion',
            category: 'motion',
            isActive: false
        }
    ],
    status: '',
    error: '',
    isDataLoading: true,
    SelectDefaultValue: 'all',
    filterBy: 'all'
};

// /. initialState

const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState,
    reducers: {
        setCardActiveStatus(state, action: PayloadAction<{ id: string, status: boolean }>) {
            const { id, status } = action.payload;
            state.galleryCards.forEach(item => item.id === id ? item.isActive = status : item.isActive = false);
        },
        setNavGalleryActiveStatus(state, action: PayloadAction<{ category: string, status: boolean }>) {
            const { category, status } = action.payload;
            state.galleryNavTemplate.forEach(item => item.category === category ? item.isActive = status : item.isActive = false);
        },
        filterGalleryByCategory(state, action: PayloadAction<string>) {
            state.filterBy = action.payload;
        },
        deleteGalleryTemplate(state) {
            const currectItem = state.galleryCards.find(item => item.isActive === true);

            if (currectItem) {
                state.galleryCards.splice(state.galleryCards.indexOf(currectItem), 1);
            }
        },
        switchDataLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isDataLoading = action.payload;
        },
        setSelectDefaultValue(state, action: PayloadAction<string>) {
            state.SelectDefaultValue = action.payload;
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

            action.payload.map((item: any) => {
                state.galleryCards.push(
                    {
                        id: `${Math.random() + item.id}`,
                        category: getRandomCategory([
                            'Design',
                            'Branding',
                            'illustration',
                            'Motion'
                        ]),
                        text: item.description ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        image: item.urls.regular ?? placeholder_image,
                        isActive: false
                    }
                );
            });
        },
        [fetchImagesData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const {
    setCardActiveStatus,
    setNavGalleryActiveStatus,
    filterGalleryByCategory,
    deleteGalleryTemplate,
    switchDataLoadingStatus,
    setSelectDefaultValue
} = gallerySlice.actions;

export default gallerySlice.reducer;