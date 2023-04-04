import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { headerNavTemplatesTypes } from '../../Types/headerSliceTypes';

// /. imports

interface headerSliceState {
    headerNavTemplates: headerNavTemplatesTypes[];
    isBurgerVisible: boolean;
}

// /. interfaces

const initialState: headerSliceState = {
    headerNavTemplates: [
        {
            id: '1',
            text: 'About',
            href: '/Agency-website/',
            isActive: true
        },
        {
            id: '2',
            text: 'Services',
            href: 'Services',
            isActive: false
        },
        {
            id: '3',
            text: 'Pricing',
            href: 'Pricing',
            isActive: false
        },
        {
            id: '4',
            text: 'Blog',
            href: 'Blog',
            isActive: false
        }
    ],
    isBurgerVisible: false
};

// /. initialState

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        switchBurgerVisibleStatus(
            state,
            action: PayloadAction<{ status: boolean }>
        ) {
            const { status } = action.payload;
            state.isBurgerVisible = status;
        }
    }
});

export const { switchBurgerVisibleStatus } = headerSlice.actions;

export default headerSlice.reducer;
