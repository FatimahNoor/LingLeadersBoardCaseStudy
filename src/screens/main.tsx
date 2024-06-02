import React, {useState, useEffect} from 'react';
import Home from './home';
import SplashScreen from './splashScreen';
import {useDispatch} from 'react-redux';
import {updateLeaderBoardData} from '../actions/action';
import leaderBoardData from '../data/leaderboard.json';

const Main = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const data = Object.values(leaderBoardData);

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateLeaderBoardData(data));
      setIsDataLoaded(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isDataLoaded) {
    return <Home />;
  }

  return <SplashScreen />;
};

export default Main;
