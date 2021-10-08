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
    toggleForReroll: (state, action) => {
      if (state.selectedForReroll.includes(action.payload)){
        var index = state.selectedForReroll.indexOf(action.payload);
        state.selectedForReroll.splice(index, 1);
      } else {
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

export const { setRerolling, createRolls, toggleForReroll, reroll, reset } = skidderSlice.actions

export default skidderSlice.reducer
