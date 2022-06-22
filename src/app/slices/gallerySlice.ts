import { createSlice } from '@reduxjs/toolkit';

import { galleryCardsTypes } from '../../Types/gallerySliceTypes';

// /. imports

interface gallerySliceState {
    galleryCards: galleryCardsTypes[]
}

// /. interfaces

const initialState: gallerySliceState = {
    galleryCards: [
        {
            id: 1,
            tag: 'Design',
            text: 'SOFA',
            image: '',
            isActive: true
        },
        {
            id: 2,
            tag: 'Branding',
            text: 'KeyBoard',
            image: '',
            isActive: false
        },
        {
            id: 3,
            tag: 'illustration',
            text: 'Work Media ',
            image: '',
            isActive: false
        },
        {
            id: 4,
            tag: 'Motion',
            text: 'DDDone',
            image: '',
            isActive: false
        },
        {
            id: 5,
            tag: 'Design',
            text: 'Abstract',
            image: '',
            isActive: false
        },
        {
            id: 6,
            tag: 'Branding',
            text: 'HandP',
            image: '',
            isActive: false
        },
        {
            id: 7,
            tag: 'Motion',
            text: 'Architect',
            image: '',
            isActive: false
        },
        {
            id: 8,
            tag: 'Design',
            text: 'CalC',
            image: '',
            isActive: false
        },
        {
            id: 9,
            tag: 'Branding',
            text: 'Sport',
            image: '',
            isActive: false
        }
    ]
};

// /. initialState

const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState,
    reducers: {
    }
});

export const {
} = gallerySlice.actions;

export default gallerySlice.reducer;