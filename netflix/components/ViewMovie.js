import { View, Text ,StyleSheet,ScrollView,StatusBar, Dimensions} from 'react-native'
import React,{useState} from 'react'
import Header from './Header'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Video from 'react-native-video-controls';
import YoutubePlayer from 'react-native-youtube-iframe';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useEffect } from 'react'
import axios from 'axios'


const ViewMovie = ({ route }) => {
  const {
    id,
    description,
    title,
    banner,
    isVideo,
    genre,
    year,
    name,
    first_air_date,
  } = route.params;
  console.log(id) 
  const [media_value, setValue] = useState(undefined)
  const [url,seturl]=useState(undefined)
  useEffect(() => {
    CallMedia();
    getVideo();
  }, [media_value])
  
  const sum = title ? title : name;
  console.log("media is " + media_value)
  // console.log("id is" + id)
  console.log("sum" + sum)
  console.log("url is"+url )
  const CallMedia = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/search/multi?api_key=419d0b6eb10386314214606a04bcfb2f&language=en-US&query=' +
        sum + '&page=1&include_adult=false',
      )
      .then(res => res.data)
      .then(res => setValue(res.results[0].media_type))
      .catch((err) => console.log(err))
  }
  const getVideo=() =>{
        axios
          .get(
            'https://api.themoviedb.org/3/' +
              media_value +
              '/' +
              id +
              '/videos?api_key=419d0b6eb10386314214606a04bcfb2f&language=en-US',
          )
          .then(res => res.data)
          .then(res => seturl(res.results[0].key))
          .catch(err => console.log('video not found with error' + err));
      
      
  }

    
  
console.log('https://api.themoviedb.org/3/'+media_value+'/'+id+'/videos?api_key=419d0b6eb10386314214606a04bcfb2f&language=en-US')
    
const tags=["Horror","Drama"]
    
    const navigation = useNavigation();
    const [play,setPlay]=useState(false)
  return true ? (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ScrollView style={styles.Container}>
        <Header style={{}} login={true} goBack={() => alert('')} />
        <YoutubePlayer
          videoId={url}
          play={play}
          height={225}
          poster={banner}
        />
        <Text style={styles.Title}>{title ? title : name}</Text>
        <View style={styles.MovieSubDetails}>
          <Text style={styles.Subtitle}>13+</Text>
          <Text style={styles.Subtitle}>{year ? year : first_air_date}</Text>
        </View>
        <View style={styles.ActionButtons}>
          <TouchableOpacity
            onPress={() => setPlay(play => !play)}
            style={styles.Play}
            activeOpacity={0.5}>
            {!play ? (
              <Ionicons name="ios-play" size={26} />
            ) : (
              <Ionicons name="pause-circle-outline" size={26} />
            )}

            <Text style={styles.TextButtonPlay}>
              {!play ? 'Play' : 'Pause'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Download} activeOpacity={0.5}>
            <Feather
              name="download"
              size={24}
              style={{color: 'white', margin: 4}}
            />
            <Text style={styles.TextButtonDownload}>Download</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.MovieDescription}>{description}</Text>
        <View style={styles.Tags}>
          {tags.map((tag, i) => {
            if (i + 1 == tags.length) {
              return (
                <View style={styles.TagWrapper} key={i}>
                  <Text style={styles.Tag}>{tag}</Text>
                </View>
              );
            } else {
              return (
                <View style={styles.TagWrapper} key={i}>
                  <Text style={styles.Tag}>{tag}</Text>
                  <View style={styles.TagDot} />
                </View>
              );
            }
          })}
        </View>

        <View style={styles.ActionButtons2}>
          {id && false ? (
            <View
              style={styles.ActionButton}
              activeOpacity={0.5}
              onPress={() => {
                db.collection('users')
                  .doc(firebase.auth().currentUser.email)
                  .collection('myList')
                  .doc(movie.id)
                  .delete();

                var list = user.list;
                list.splice(list.indexOf(movie.id), 1);

                db.collection('users')
                  .doc(firebase.auth().currentUser.email)
                  .update({
                    list,
                  });
              }}>
              <Feather name="check" size={35} color="white" />
              <Text style={styles.ActionButtonLabel}>My List</Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.ActionButton}
              activeOpacity={0.5}
              onPress={() => {
                db.collection('users')
                  .doc(firebase.auth().currentUser.email)
                  .collection('myList')
                  .doc(movie.id)
                  .set({
                    movieID: movie.id,
                    banner: movie.banner,
                  });

                var list = user.list;
                list.push(movie.id);

                db.collection('users')
                  .doc(firebase.auth().currentUser.email)
                  .update({
                    list,
                  });
              }}>
              <Ionicons name="add-outline" size={35} color="white" />
              <Text style={styles.ActionButtonLabel}>My List</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.ActionButton} activeOpacity={0.5}>
            <AntDesign
              name="like2"
              size={30}
              color="white"
              style={{marginBottom: 7}}
            />
            <Text style={styles.ActionButtonLabel}>Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionButton} activeOpacity={0.5}>
            <AntDesign
              name="sharealt"
              size={27}
              color="white"
              style={{marginBottom: 7}}
            />
            <Text style={styles.ActionButtonLabel}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  ) : (
    <View style={styles.Container} />
  );
}

export default ViewMovie;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'black',
        position:'relative'
    },
    HeaderIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    Title: {
        color: 'white',
        fontSize: 24,
        margin: 10,
        fontFamily:"Montserrat-Bold"
    },
    MovieBadge: {
        color: "#a2a2a2",
        backgroundColor: "#373737",
        padding: 2,
        width: 38,
        textAlign: 'center',
        margin:15
    },
    Subtitle: {
        color: "#a2a2a2",
        margin:5
    },
    Play: {
        flexDirection: 'row',
        borderRadius:10,
        width: '55%',
        height: 32,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        backgroundColor: "#fff",
    },
    TextButtonPlay: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft:5
    },
    Download: {
        flexDirection: 'row',
        backgroundColor: "#262626",
        borderRadius:10,
        width: '55%',
        height: 32,
        borderRadius:2,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    TextButtonDownload: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white',
        paddingLeft:5
    },
    ActionButtons: {
        flexDirection: 'column',
        width: '100%',
        marginLeft: '25%',
        borderRadius:10
        
        
    },
    MovieDescription: {
        color: 'white',
        width: '98%',
        marginLeft: 10,
        margin: 10,
        fontWeight: '100',
        fontFamily: 'Montserrat-Light',
        lineHeight: 20,
        marginTop:25
    },
    Tag: {
        color: '#fff',
        fontFamily:'Montserrat-Regular'
    },
    TagDot: {
        margin: 10,
        backgroundColor: 'white',
        height: 2,
        width:2
    },
    Tags: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 0,
        marginRight: 5,
        marginBottom:3,
        alignItems: 'center',
        flexWrap: 'wrap',
        width:'99%'
    },
    TagWrapper: {
        flexDirection: 'row',
        alignItems:'center'
    },
    ActionButtons2: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin:20
        , alignItems: 'center'
    },
    ActionButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        marginTop:20
    },
    ActionButtonLabel: {
        color: 'white',
        fontFamily: 'Montserrat-Light',
        fontSize:15
    }
})