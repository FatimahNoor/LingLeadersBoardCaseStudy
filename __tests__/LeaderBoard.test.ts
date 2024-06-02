import {Alert} from 'react-native';
import {
  sortDataAlphabetically,
  generateLowestUsers,
  generateTopUsers,
} from '../src/utils/leaderBoardUtils';
import {sampleUserData} from '../mockData/mockUserData';

// Mocking Alert.alert
jest.mock('react-native', () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

describe('Utility Functions', () => {
  describe('sortDataAlphabetically', () => {
    it('should sort user data alphabetically by name', () => {
      const sortedData = sortDataAlphabetically(sampleUserData);
      expect(sortedData).toEqual([
        {
          bananas: 36750,
          lastDayPlayed: '2018-07-21',
          longestStreak: 18,
          name: 'Chris Buckley',
          stars: 176,
          subscribed: true,
          uid: 'zJsI8m74uqOI3el3EM1u64kbUWd2',
        },
        {
          bananas: 0,
          lastDayPlayed: '2018-07-21',
          longestStreak: 18,
          name: 'Fatima Noor',
          stars: 0,
          subscribed: true,
          uid: 'ajsdjasbdansbdhb34h2vgvh34vh23',
        },
        {
          bananas: 27800,
          lastDayPlayed: '2018-12-30',
          longestStreak: 7,
          name: 'Patrick Kennedy',
          stars: 104,
          subscribed: true,
          uid: 'zOztg0xHJwN2GSHO9XSFAPvTl7E2',
        },
        {
          bananas: 19500,
          lastDayPlayed: '2019-02-02',
          longestStreak: 9,
          name: 'Wolfgang Wirtz',
          stars: 92,
          subscribed: true,
          uid: 'zQH10NTZfYaXACdiF3V6hd7Ahn93',
        },
      ]);
    });
  });

  describe('generateLowestUsers', () => {
    it('should generate a list of users with 0 bananas', () => {
      const lowestUsers = generateLowestUsers(sampleUserData);
      expect(lowestUsers).toEqual([
        {
          bananas: 0,
          lastDayPlayed: '2018-07-21',
          longestStreak: 18,
          name: 'Fatima Noor',
          stars: 0,
          subscribed: true,
          uid: 'ajsdjasbdansbdhb34h2vgvh34vh23',
        },
      ]);
    });
  });

  describe('generateTopUsers', () => {
    it('should generate a list of top 10 users including the specified user', () => {
      const topUsers = generateTopUsers(sampleUserData, 'Chris Buckley');
      expect(topUsers).toEqual([
        {
          bananas: 36750,
          lastDayPlayed: '2018-07-21',
          longestStreak: 18,
          name: 'Chris Buckley',
          stars: 176,
          subscribed: true,
          uid: 'zJsI8m74uqOI3el3EM1u64kbUWd2',
          userRank: 1,
        },
        {
          bananas: 27800,
          lastDayPlayed: '2018-12-30',
          longestStreak: 7,
          name: 'Patrick Kennedy',
          stars: 104,
          subscribed: true,
          uid: 'zOztg0xHJwN2GSHO9XSFAPvTl7E2',
          userRank: 2,
        },
        {
          bananas: 19500,
          lastDayPlayed: '2019-02-02',
          longestStreak: 9,
          name: 'Wolfgang Wirtz',
          stars: 92,
          subscribed: true,
          uid: 'zQH10NTZfYaXACdiF3V6hd7Ahn93',
          userRank: 3,
        },
        {
          bananas: 0,
          lastDayPlayed: '2018-07-21',
          longestStreak: 18,
          name: 'Fatima Noor',
          stars: 0,
          subscribed: true,
          uid: 'ajsdjasbdansbdhb34h2vgvh34vh23',
          userRank: 4,
        },
      ]);
    });

    it('should show an alert if the user name does not exist', () => {
      const topUsers = generateTopUsers(sampleUserData, 'Non-existent User');
      expect(Alert.alert).toHaveBeenCalledWith(
        'Alert',
        'This user name does not exist! Please specify an existing user name!',
      );
      expect(topUsers).toEqual([]);
    });
  });
});
