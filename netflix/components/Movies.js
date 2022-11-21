import React from 'react';
import {Dimensions, TouchableOpacity,StyleSheet,View,Image,Text, ScrollView} from 'react-native';
import { movie_image_path } from '../urls/URLs';
import {useNavigation} from '@react-navigation/native';




const Movies = ({ label, array }) => {

  const navigation = useNavigation();
  

  return (
    <View style={styles.Container}>
      <Text style={styles.Label}>{label}</Text>
      <ScrollView horizontal style={styles.MovieScroll}>
        {array?.map((movie, item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={item}
              onPress={() => {
                navigation.navigate('ViewMovie', {
                  id: movie.id,
                  description: movie.overview,
                  title: movie.title,
                  name:movie.name,
                  banner: movie_image_path+movie.poster_path,
                  isVideo: movie.video,
                  genre: movie.genre_ids,
                  year: movie.release_date?.substring(0, 4),
                  first_air_date: movie.first_air_date?.substring(0,4)


                  
                });
              }}>
              <View style={styles.MovieCard} >
                <Image style={styles.MoviePoster} resizeMode="cover" source={{uri: movie_image_path+movie.poster_path}} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Movies;


const styles = StyleSheet.create({
    Container: {
        paddingLeft: 20,
        paddingright:20
    },
    Label: {
        color: "#fff",
        fontWeight: '700',
        fontSize: 23,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 15,
        marginLeft:10
    },
    MovieScroll: {
        paddingLeft:10
    },
    MoviePoster: {
        width: Math.round((Dimensions.get('window').width * 35) / 100),
        height:200
    },
    MovieCard: {
        paddingRight:9
    }
})
