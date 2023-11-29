import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  Id:'',
  Subj:'',
  Credit:'',
  student:[],
};

export const Slice = createSlice({
  name: 'data',
  initialState: initialValue,
  reducers: {
    addStudent: (state, action) => {
      // console.log(action.payload)
      state.student = action.payload
      // console.log(state.student)
    },
    addSubject: (state,action) => {
      state.Id=action.payload.Id
      state.Subj=action.payload.Subj
      state.Credit=action.payload.Credit
    }
  },
});

export const {addStudent,addSubject } = Slice.actions;
export default Slice.reducer;