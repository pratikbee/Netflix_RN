import { View, Text } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

export default function HomeScreen() {
  const data = useSelector(state => state.count.Title)
  
  return (
    <View>
      <Text style={{fontFamily: 'Montserrat-Medium'}}>{data}</Text>
    </View>
  );
}