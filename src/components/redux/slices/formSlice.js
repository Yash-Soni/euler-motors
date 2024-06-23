import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  fields: [],
  formDataList: []
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    addField: (state, action) => {
      state.fields.push(action.payload)
    },
    updateField: (state, action) => {
      const {index, fieldData} = action.payload
      state.fields[index] = { ...state.fields[index], ...fieldData }
    },
    removeField: (state, action) => {
      state.fields.splice(action.payload, 1)
    },
    addForm: (state, action) => {
      state.formDataList.push(action.payload)
    },
    removeForm: (state, action) => {
      state.formDataList.splice(action.payload, 1)
    }
  }
})

export const { setTitle, addField, updateField, removeField, addForm, removeForm } = formSlice.actions 
export default formSlice.reducer