import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    laylo: (state) => {
      state.value += 1
    },
  }
})

export const { laylo } = counterSlice.actions

export default counterSlice.reducer































