import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setTracks } = trackSlice.actions;
export default trackSlice.reducer;