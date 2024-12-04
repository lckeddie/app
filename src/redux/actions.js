import { ADD_USER, DELETE_USER, UPDATE_PASSWORD } from './type';

export const addUser = (phoneNumber, password) => ({
  type: ADD_USER,
  payload: { phoneNumber, password },
});

export const deleteUser = (phoneNumber) => ({
  type: DELETE_USER,
  payload: phoneNumber,
});

export const updatePassword = (phoneNumber, newPassword) => ({
  type: UPDATE_PASSWORD,
  payload: { phoneNumber, newPassword },
});
