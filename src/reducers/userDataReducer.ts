import {LEADER_BOARD_DATA} from '../constants/types';
import {UserData} from '../types/types';

export const userDataReducer = (
  state = [] as UserData[],
  action: {type: string; payload: UserData[]},
): UserData[] => {
  switch (action.type) {
    case LEADER_BOARD_DATA:
      return action.payload;

    default:
      return state;
  }
};
