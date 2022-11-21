import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import  Feather  from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { movie_image_path } from '../urls/URLs';


const Hero = ({ user }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Image
        style={styles.Banner}
        resizeMode="contain"
        source={{
          uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTAytd1vigKbOPjqKU6DxgabgZoLrjdBz7MaLNmekog0p0h-U7ABf1ccTeNoJ_46ZcPREXOwn06cFBDW5lBu46AeS1jdks0wfIhi_GzIJ4Sc34WhOdNdXJ_7bNaXYAvnMwuDL6d0GZbB0J46IhYI8tMtaNnbkqReYevcWG-LyWFI.webp',
        }}
      />
      <View style={styles.Tags}>
        <Text style={styles.MenuTag}>Sci-Fi TV</Text>
        <View style={styles.Separator} />
        <Text style={styles.MenuTag}>Teen TV Shows</Text>
        <View style={styles.Separator} />
        <Text style={styles.MenuTag}>TV Horror</Text>
      </View>
      <View style={styles.MenuHero}>
        <TouchableOpacity style={styles.Button} activeOpacity={0.5}>
          <Ionicons name="add-outline" size={28} color="#fff" />
          <Text style={styles.TextButton}>My List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Play}
          onPress={() =>
            navigation.navigate('ViewMovie', {
              id: 66732,
              description:
                'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
              title: 'Stranger Things',
              name: undefined,
              banner: movie_image_path + "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
              isVideo: true,
              genre: [18,
10765,
9648
              ],
              
              year: "2016",
              first_air_date: undefined,
            })
          }>
          <Ionicons name="ios-play" size={26} />
          <Text style={styles.TextButtonPlay}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} activeOpacity={0.5}>
          <Feather name="info" size={22} color="#FFF" />
          <Text style={styles.TextButton}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Hero;


const styles = StyleSheet.create({
    Container: {
        position:'absolute',
        width: '100%',
        alignItems: 'center',
        
        top:'45%'
    },
    Banner: {
        height: 135,
        width: '100%'
    },

    Tags: {
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    MenuTag: {
        color: '#fff',
        paddingUp: 8,
        paddingBottom: 8
    },
    Separator: {
        width: 3,
        height: 3,
        backgroundColor: '#e8e8e8',
        marginTop: 6,
        marginBottom: 6,
        borderRadius: 3
    },
    MenuHero: {
        width: '80%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Button: {
        alignItems: 'center'
    },

    TextButton: {
        color: '#fff',
        fontSize: 13,
        marginTop: 3
        ,
    },

    Play: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 142,
        height: 32,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent:'center'
    },
    TextButtonPlay: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft:5
    },
    
})