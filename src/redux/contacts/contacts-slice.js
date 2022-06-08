import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;
