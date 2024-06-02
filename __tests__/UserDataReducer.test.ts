import {LEADER_BOARD_DATA} from '../src/constants/types';
import {userDataReducer} from '../src/reducers/userDataReducer';
import {sampleUserData} from '../mockData/mockUserData';

describe('userDataReducer', () => {
  it('should return the initial state', () => {
    expect(userDataReducer(undefined, {type: '', payload: []})).toEqual([]);
  });

  it('should handle LEADER_BOARD_DATA', () => {
    const action = {
      type: LEADER_BOARD_DATA,
      payload: sampleUserData,
    };
    expect(userDataReducer([], action)).toEqual(sampleUserData);
  });

  it('should return the current state for unknown action types', () => {
    const currentState = sampleUserData;
    const action = {type: 'UNKNOWN_ACTION', payload: []};
    expect(userDataReducer(currentState, action)).toEqual(currentState);
  });
});
