import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({login, goBack, label}) => {
  const navigation = useNavigation();
  const signOutUser = () => {
    alert('sign out clicked');
  };
  const uri =
        'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41';
    
    return (
            
                login ? (
			<View style={styles.Container}>
				<View style={styles.HeaderLeftSide}>
					{
						goBack ? (
							<TouchableOpacity
								style={{ marginLeft: 10 }}
								onPress={goBack}
							>
								<AntDesign name="arrowleft" size={24} color="white" />
							</TouchableOpacity>
						) : (
								<Image style={styles.Logo} resizeMode='contain' source={require('../assets/logo.png')} />
							)
					}
					{
						label && (
							<Text style={styles.HeaderTitle}>{label}</Text>
						)
					}
				</View>
				<View style={styles.HeaderIcons}>
					{
						goBack ? (
							<TouchableOpacity activeOpacity={0.5} onPress={() => {
								navigation.navigate("Search")
							}}>
								<MaterialIcons name="search" size={30} color="white" style={{ marginRight: 15 }} />
							</TouchableOpacity>
						) : (
								<TouchableOpacity activeOpacity={0.5} onPress={() => {
									navigation.navigate("Search")
								}}>
									<MaterialIcons name="search" size={35} color="white" style={{ marginRight: 15 }} />
								</TouchableOpacity>
							)
					}
					{
						goBack ? (
							<TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
								<Image style={styles.Avatar} resizeMode='contain' source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }} />
							</TouchableOpacity>
						) : (
								<TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
									<Image style={styles.Avatar2} resizeMode='contain' source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }} />
								</TouchableOpacity>
							)
					}
				</View>
			</View>
		) : (
				<View style={styles.Container2}>
					<Image style={styles.Logo2} resizeMode='contain' source={require('../assets/netflixlogo2.png')} />
				</View>
			)
        
        )
    

};

export default Header;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:30,
    paddingLeft: 10,
    paddingUp: 25,
    paddingRight: 0,
    paddingBottom:25,
    width: '100%',
  },
  Container2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    width: '100%',
  },

  Logo: {
    width: 23,
    height: 45,
  },
  Logo2: {
    width: 125,
    height: 145,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  Avatar2: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },

  HeaderIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  HeaderTitle: {
    color: 'white',
    marginLeft: 15,
    fontFamily: 'Montserrat-Black',
    fontSize: 18,
  },
  HeaderLeftSide: {
    flexDirection: 'row',
  },
});
