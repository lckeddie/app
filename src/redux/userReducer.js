import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_USER, DELETE_USER, UPDATE_PASSWORD } from './type';

const initialState = {
  userList: [],
};

const saveToStorage = async (data) => {
  try {
    await AsyncStorage.setItem('userList', JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save data to AsyncStorage:', error);
  }
};

const loadFromStorage = async () => {
  try {
    const data = await AsyncStorage.getItem('userList');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load data from AsyncStorage:', error);
    return [];
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const updatedList = [...state.userList, action.payload];
      saveToStorage(updatedList);
      return { ...state, userList: updatedList };
    }
    case DELETE_USER: {
      const updatedList = state.userList.filter(
        (user) => user.phoneNumber !== action.payload
      );
      saveToStorage(updatedList);
      return { ...state, userList: updatedList };
    }
    case UPDATE_PASSWORD: {
      const updatedList = state.userList.map((user) =>
        user.phoneNumber === action.payload.phoneNumber
          ? { ...user, password: action.payload.newPassword }
          : user
      );
      saveToStorage(updatedList);
      return { ...state, userList: updatedList };
    }
    default:
      return state;
  }
};

(async () => {
  initialState.userList = await loadFromStorage();
})();

export default userReducer;
