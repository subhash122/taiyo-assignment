import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  status: string,
}
interface ContactState {
  contacts: Contact[]
}
const initialState: ContactState = {
  contacts: [{
    id: '1',
    firstName: "subhash",
    lastName: "joshi",
    status: "Active",
  },
  {
    id: '2',
    firstName: "neeraj",
    lastName: "chain",
    status: "Inactive",
  },
  {
    id: '3',
    firstName: "nick",
    lastName: "fury",
    status: "Active",
  },]
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
      toast.success('Contact added successfully');
    },
    removeContact(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      toast.success('Contact removed successfully');
    },
    updateContact(state, action: PayloadAction<Contact>) {
      let contactIndex = state.contacts.findIndex((item) => item.id == action.payload.id)
      if (contactIndex != -1) {
        state.contacts[contactIndex] = action.payload;

        toast.success('Contact updated successfully');
      }
    },
  },
});

export const { addContact, removeContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
