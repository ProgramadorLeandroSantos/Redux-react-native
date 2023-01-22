import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Counter from '../Counter';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Reducers/List/Actions';

const Header = () => {
  const [txtValue, setTxtValue] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: 'center', width: '100%', marginTop: 30 }}>
      <Counter />
      <TextInput
        value={txtValue}
        style={{ borderWidth: 1, borderColor: 'red', width: '80%', fontSize: 18 }}
        placeholder='Adicionar produto'
        onChangeText={setTxtValue}
        onEndEditing={() => setTxtValue("")}
        onSubmitEditing={() => dispatch(addItem({
          id: Math.random(),
          title: txtValue,
          ischecked: false
        }))}
      />
    </View>
  )
}
export default Header;