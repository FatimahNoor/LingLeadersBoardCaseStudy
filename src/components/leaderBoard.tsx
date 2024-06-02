import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {UserData} from '../types/types';
import {LEMON_COLOR, LIGHT_GREEN, YELLOW_COLOR} from '../constants/color';

interface Props {
  name: string;
  data: UserData[];
  isSearch: boolean;
}

export const LeaderBoard = (props: Props) => {
  const {name, data, isSearch} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.headerView, styles.fullWidth]}>
          <Text style={styles.headerText}>Name</Text>
        </View>

        <View style={[styles.headerView, styles.halfWidth]}>
          <Text style={styles.headerText}>Rank</Text>
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Bananas</Text>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.uid}
        renderItem={({item, index}) => {
          const isSearchedUser = item.name === name && isSearch;
          const backgroundColor = {
            backgroundColor: isSearchedUser ? LIGHT_GREEN : LEMON_COLOR,
          };
          const fontWeight = isSearchedUser ? 'bold' : 'normal';
          const color = isSearchedUser ? 'red' : 'black';
          return (
            <View style={styles.leaderBoardContainer}>
              <View style={[styles.name, backgroundColor]}>
                <Text style={[styles.nameText, {color}]}>{item.name}</Text>
              </View>
              <View style={[styles.rank, backgroundColor]}>
                <Text style={[styles.rankText, {fontWeight, color}]}>
                  {item?.userRank ?? index + 1}
                </Text>
              </View>
              <View style={[styles.bananas, backgroundColor]}>
                <Text style={[styles.bananasText, {fontWeight, color}]}>
                  {item.bananas}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, height: '65%', width: '100%'},
  leaderBoardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  headerView: {
    borderWidth: 1,
    height: 50,
    width: 80,
    justifyContent: 'center',
    backgroundColor: YELLOW_COLOR,
  },
  headerText: {
    marginStart: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
  },
  name: {
    height: 40,
    width: 150,
    borderWidth: 1,
    backgroundColor: LEMON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {fontSize: 15, fontWeight: 'bold', color: 'black', marginStart: 5},
  rank: {
    height: 40,
    width: 100,
    borderWidth: 1,
    backgroundColor: LEMON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bananas: {
    height: 40,
    width: 80,
    borderWidth: 1,
    backgroundColor: LEMON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {fontSize: 15, textAlign: 'center', color: 'black'},
  bananasText: {fontSize: 15, textAlign: 'center', color: 'black'},
  fullWidth: {width: 150},
  halfWidth: {width: 100},
});
