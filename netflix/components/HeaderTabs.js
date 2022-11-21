import { View, Text ,Dimensions,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HeaderTabs = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.Tab}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.Tab}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.Tab}>My List</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HeaderTabs;

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingTop: 50,
        paddingRight: 0,
      paddingBottom: 50,
        marginLeft:-15
    },
    Tab: {
        fontSize: 18,
        fontWeight: '400',
        color:"#fff",
    }
})