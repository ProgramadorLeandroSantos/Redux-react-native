import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import {useDispatch } from 'react-redux';
import { Item } from '../../@types/types';
import { checkeItem,deleteItem } from '../../Reducers/List/Actions';

const ItemList = (item: Item) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{ padding: 10, backgroundColor: 'gray', margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}
      onPress={() => dispatch(checkeItem(item))}
    >
      <Text style={{ fontSize: 22, textDecorationLine: item.ischecked ? 'line-through' : 'none' }}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => dispatch(deleteItem(item))}
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>x</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default React.memo(ItemList);