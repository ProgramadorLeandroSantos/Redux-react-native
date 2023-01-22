import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../../@types/types';

const Counter = () => {
  const List = useSelector((state: IState) => state.listReducers);

  let done = List.map(item => item.ischecked == true ? item.ischecked : null).filter(item => item != null).length;
  let toDo = List.map(item => item.ischecked == false ? item.ischecked : null).filter(item => item != null).length;
  let total = done + toDo;

  return (
    <View style={{ justifyContent: 'space-around', alignContent: 'center', width: '90%', flexDirection: 'row', marginBottom: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Faltam:{toDo}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Pronto:{done}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Total:{total}</Text>
    </View>
  )
}
export default Counter;