import { createSlice } from '@reduxjs/toolkit';

import { headerNavTemplatesTypes } from '../../Types/headerSliceTypes';

// /. imports

interface headerSliceState {
    headerNavTemplates: headerNavTemplatesTypes[],
}

// /. interfaces

const initialState: headerSliceState = {
    headerNavTemplates: [
        {
            id: '1',
            text: 'About',
            isActive: true
        },
        {
            id: '2',
            text: 'Services',
            isActive: false
        },
        {
            id: '3',
            text: 'Pricing',
            isActive: false
        },
        {
            id: '4',
            text: 'Blog',
            isActive: false
        }
    ]
};

// /. initialState

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
    }
});

export const {
} = headerSlice.actions;

export default headerSlice.reducer;