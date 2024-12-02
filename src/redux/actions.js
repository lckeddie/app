import { ADD_USER, DELETE_USER } from './type';

export const addUser = (phoneNumber, password) => ({
  type: ADD_USER,
  payload: { phoneNumber, password },
});

export const deleteUser = (phoneNumber) => ({
  type: DELETE_USER,
  payload: phoneNumber,
});
