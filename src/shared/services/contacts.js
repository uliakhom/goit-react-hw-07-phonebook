import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62a0a111a9866630f813d695.mockapi.io/api/v1/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
