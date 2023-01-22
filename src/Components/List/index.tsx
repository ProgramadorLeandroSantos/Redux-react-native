import React from 'react';
import { View, FlatList } from 'react-native';
import {useSelector } from 'react-redux';
import ItemList from '../Item';
import { IState } from '../../@types/types';

const List = () => {
  
  const List = useSelector((state: IState) => state.listReducers);

  return (
    <View style={{ width: '100%', marginTop: 30 }}>
      <FlatList
        data={List}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemList {...item} />}
      />
    </View>
  )
}

export default List;