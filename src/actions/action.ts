import {LEADER_BOARD_DATA} from '../constants/types';
import {UserData} from '../types/types';

export const updateLeaderBoardData = (data: UserData[]) => ({
  type: LEADER_BOARD_DATA,
  payload: data,
});
