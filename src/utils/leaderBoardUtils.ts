import {Alert} from 'react-native';
import {UserData} from '../types/types';

const getAllUsersSorted = (usersList: UserData[]) =>
  usersList.sort((a, b) => b.bananas - a.bananas);

const generateList = (usersList: UserData[], numberOfUsers: number) =>
  usersList.slice(0, numberOfUsers);

export const sortDataAlphabetically = (userData: UserData[]): UserData[] =>
  userData.sort((a, b) => a.name.localeCompare(b.name));

export const generateLowestUsers = (userData: UserData[]): UserData[] =>
  userData.filter(item => item.bananas === 0);

export const generateTopUsers = (
  userData: UserData[],
  userName: string,
): UserData[] => {
  const sortedUsers = getAllUsersSorted(userData);
  const topTenUsers = generateList(sortedUsers, 10);
  const isNameExists = topTenUsers.some(item => item.name === userName);
  const searchedUser = sortedUsers.find((item, index) => {
    if (item.name === userName) {
      item.userRank = index + 1;
      return item;
    }
  });
  if (isNameExists) {
    // Assign ranks to each user in the top 10 list
    topTenUsers.forEach((user, index) => {
      user.userRank = index + 1;
    });
    return topTenUsers;
  } else if (searchedUser) {
    const topNineUsers = generateList(userData, 9);
    topNineUsers.push(searchedUser);
    return topNineUsers;
  }
  Alert.alert(
    'Alert',
    'This user name does not exist! Please specify an existing user name!',
  );
  return [];
};
