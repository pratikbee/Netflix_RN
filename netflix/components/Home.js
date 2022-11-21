import React, {useEffect, useState, useLayoutEffect} from 'react';

import { StatusBar, Dimensions, ImageBackground, StyleSheet, View,Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { add_movie } from '../store/actions/action_creator';
import { add_trending } from '../store/actions/action_creator';
import { add_popular_tv } from '../store/actions/action_creator';



import Header from './Header';
import Hero from './Hero';
import HeaderTabs from './HeaderTabs';
import Movies from './Movies';
import { ScrollView } from 'react-native-gesture-handler';



const height = Dimensions.get('window').height;


const Home = ({ navigation }) => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPopularMovie());
    dispatch(addTrendingMovie());
    dispatch(addPopularTV());
  }, []);
  const [state,setState]=useState(null)
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
 
  const data = useSelector((state) => state.count)
  const popular_movies = useSelector((state) => state.movie.popularMovie?.results.splice(5))
  const trending_movies = useSelector((state) => state.movie.trendingMovie?.results.splice(5))
  
  var popular_tv = useSelector((state) => state.movie.popularTV?.results.splice(5))

  
  var movie = []
  
  
for (let step = 0; step < 5; step++) {
  movie.push(data)
  }

  const popularmovies = useSelector(
    state => state.movie.popularMovie?.results,
  );
  const trendingmovies = useSelector(
    state => state.movie.trendingMovie?.results,
  );

  const populartv=useSelector(state=>state.movie.popularTV?.results)


  

  

  

  const addPopularMovie = () => {
    return dispatch =>
      axios
        .get(
          'https://api.themoviedb.org/3/tv/popular?api_key=419d0b6eb10386314214606a04bcfb2f&language=en-US&page=1',
        )
        .then(res => res.data)
        .then(res => {
          dispatch(add_movie(res));
          
        })
        .catch(err => console.log(err + 'error is here'));
    
  }
  const addTrendingMovie = () => {
    return dispatch =>
      axios
        .get(
          'https://api.themoviedb.org/3/trending/all/day?api_key=419d0b6eb10386314214606a04bcfb2f',
        )
        .then(res => res.data)
        .then(res => {
          dispatch(add_trending(res));
        })
        .catch(err => console.log(err + 'error is here'));
    
  }

  const addPopularTV = () => {
     return dispatch =>
       axios
         .get(
           'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=419d0b6eb10386314214606a04bcfb2f',
         )
         .then(res => res.data)
         .then(res => {
           dispatch(add_popular_tv(res));
         })
         .catch(err => console.log(err + 'error is here'));
  }


  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={styles.Container}>
        <ImageBackground
          style={styles.Poster}
          source={{
            uri: 'https://cdn.vox-cdn.com/thumbor/9PqzVk9RnfW0g22byhIyRSPDBYM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8832449/strangerthings.jpg',
          }}>
          
          <LinearGradient
            style={styles.Gradient}
            locations={[0, 0.2, 0.5, 0.94]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}>
            <View style={{margin: '7%'}}>
              <Header login={true} navigation={navigation} />
              <HeaderTabs />
            </View>
            <Hero user={user} />
          </LinearGradient>
        </ImageBackground>

        <React.Fragment>
          <Movies label="Popular on Netflix" array={popularmovies}  />
          <Movies label="US Movies" array={trendingmovies}  />
          <Movies label="Popular TV Shows" array={populartv}  />
        </React.Fragment>
      </ScrollView>
    </>
  );
};

export default Home;


const styles = StyleSheet.create({
  Gradient: {
    height: '101%',
    
  },
  Poster: {
    width: '100%',
    height: height,
    
  },
  Container: {
    flex: 1,
    backgroundColor: '#000',
    
}
  }

)
