import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../components/button';
import {InputBox} from '../components/inputBox';
import {LeaderBoard} from '../components/leaderBoard';
import {useSelector} from 'react-redux';
import {UserData} from '../types/types';
import {RootState} from '../reducers/rootReducers';
import {
  generateLowestUsers,
  generateTopUsers,
  sortDataAlphabetically,
} from '../utils/leaderBoardUtils';

const Home = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState<UserData[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  const usersData = useSelector((state: RootState) => state.usersData);
  const isNotEmpty = data.length !== 0;

  const onSearchPress = () => {
    const topUser = generateTopUsers(usersData, name);
    setData(topUser);
    setIsSearch(true);
  };

  const sortByName = (userData: UserData[]) => {
    const currentData = [...userData];
    const sortedAlphabetically = sortDataAlphabetically(currentData);
    if (sortedAlphabetically[0].name === data[0].name) {
      onSearchPress();
    } else {
      setData(sortedAlphabetically);
    }
  };

  const sortByLowestRank = () => {
    const lowestRankUsers = generateLowestUsers(usersData);
    const sortedAlphabetically = sortDataAlphabetically(lowestRankUsers);
    setIsSearch(false);
    setData(sortedAlphabetically);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputBoxContainer, isNotEmpty && styles.topMargin]}>
        <View style={styles.input}>
          <InputBox text={name} onChangeText={setName} />
        </View>
        <View style={styles.search}>
          <Button onPress={onSearchPress} text="Search" />
        </View>
      </View>
      {data.length !== 0 && (
        <>
          <View style={styles.multipleButtonContainer}>
            <View style={styles.button}>
              <Button onPress={() => sortByName(data)} text="Filter" />
            </View>
            <View style={styles.button}>
              <Button onPress={sortByLowestRank} text="Lowest Rank" />
            </View>
          </View>
          <LeaderBoard name={name} data={data} isSearch={isSearch} />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {width: '73%'},
  search: {width: '25%'},
  topMargin: {marginTop: 30, marginBottom: 10},
  multipleButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {width: '45%'},
});
