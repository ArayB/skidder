import { createSlice } from '@reduxjs/toolkit'

export const skidderSlice = createSlice({

  name: 'skidder',
  initialState: {
    rerolling: false,
    rolls: [],
    selectedForReroll: [],
    rerolled: false,
  },
  reducers: {
    reset: (state) => {
      state.rerolling = false;
      state.selectedForReroll = [];
      state.rerolled = false;
    },
    setRerolling: (state, action) => {
      state.rerolling = action.payload
    },
    createRolls: (state, action) => {

      var rolling = Array.from({ length: action.payload }, () => Math.floor(Math.random() * 6));

      state.rolls = rolling
    },
    selectForReroll: (state, action) => {
      if (!state.selectedForReroll.includes(action.payload)){
        state.selectedForReroll.push(action.payload);
      }
    },
    reroll: (state) => {
      state.selectedForReroll.forEach((val) => {
        var new_roll = Math.floor(Math.random() * 6);
        state.rolls[val] = new_roll;
      });
      state.rerolled = true;
    }
  }
})

export const { setRerolling, createRolls, selectForReroll, reroll, reset } = skidderSlice.actions

export default skidderSlice.reducer
