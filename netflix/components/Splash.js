import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function Splash() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Image style={{height:'60%',width:'60%'} } source={require('netflix/assets/splash2.png')}></Image>
      </View>
    );
}