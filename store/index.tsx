// store/index.tsx
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { fetchContacts } from '../utility/api';

// Định nghĩa kiểu cho contact
interface Contact {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  favorite: boolean;
}

// Định nghĩa kiểu cho state
interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: boolean;
}

// Hàm ánh xạ dữ liệu từ API
const mapContact = (contact: any): Contact => {
  console.log('Mapping contact:', contact);
  // Kiểm tra xem name có phải là chuỗi không
  const name = typeof contact.name === 'string' ? contact.name : `${contact?.name?.first || 'Unknown'} ${contact?.name?.last || 'User'}`;
  const avatar = contact.avatar || contact?.picture?.large || 'https://via.placeholder.com/150';
  const phone = contact.phone || 'N/A';
  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    avatar,
    phone,
    favorite: Math.random() >= 0.5,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  } as ContactsState,
  reducers: {
    fetchContactsLoading: (state: ContactsState) => {
      state.loading = true;
      state.error = false;
    },
    fetchContactsSuccess: (state: ContactsState, action: { payload: any[] }) => {
      const mappedContacts = action.payload.map(mapContact);
      state.contacts = mappedContacts;
      state.loading = false;
      state.error = false;
    },
    fetchContactsError: (state: ContactsState) => {
      state.loading = false;
      state.error = true;
    },
    toggleFavorite(state: ContactsState, action: { payload: string }) {
      const contact = state.contacts.find((c) => c.id === action.payload);
      if (contact) contact.favorite = !contact.favorite;
    },
  },
});

export const { fetchContactsLoading, fetchContactsSuccess, fetchContactsError, toggleFavorite } =
  contactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;