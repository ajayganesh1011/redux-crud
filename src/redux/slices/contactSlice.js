import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    updateContact: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const existingContact = state.find((contact) => contact.id === id);
      if (existingContact) {
        existingContact.name = name;
        existingContact.email = email;
        existingContact.phone = phone;
      }
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
