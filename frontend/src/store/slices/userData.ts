import { createSlice } from '@reduxjs/toolkit';
// import { IUserResponseData } from '../api/Profile/types';

interface IState {
    user: string | null;
}

const initialState: IState = {
    user: null,
};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, { payload }) => {
            state.user = payload;
        },
    },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice;
