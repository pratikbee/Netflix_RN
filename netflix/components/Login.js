import React,{useState} from 'react'
import { View, Text, ScrollView, ImageBackground, TouchableOpacity,StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Header from './Header';
export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const login = () => {
    setLoading(true);
    if (!email || !password) {
      alert('All fields are mandatory');
      setPassword('');
      setEmail('');
      setLoading(false);
      return;
    }

    signInWithEmailAndPassword(auth,email, password)
      .then(authuser => {
        navigation.replace('BottomScreen');
        setPassword('');
        setEmail('');
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('netflix/assets/background.png')}
        resizeMode="cover"
        style={{flex: 1, height: Dimensions.get('window').height}}>
        <View style={styles.overlay}>
          {/* <Header login={true}  /> */}
          <View style={styles.formwrapper}>
            <View style={styles.form}>
              <Text style={styles.signintext}>Sign In</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your mail"
                placeholderTextColor="grey"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="grey"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
              />
              <TouchableOpacity
                onPress={()=>login()}
                disabled={loading}
                style={styles.submitform}
                activeOpacity={0.5}>
                <Text style={styles.buttontext}>
                  {loading ? 'loading...' : 'Sign in'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.newtonetflixwrapper}
                activeOpacity={0.5}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text style={styles.newtonetflix}>New to Netflix? SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000',
    }
,
    formwrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height:'80%',
    },

    form: {
        height:400,
        width: '90%',
        backgroundColor: 'black',
        flexDirection: 'column',
        borderRadius: 20,
        padding: 20,
        justifyContent:'center'
    },

    submitform: {
        width: '95%',
        height: 50,
        border: 'none',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e7442e',
        color: 'white',
        marginTop: 20,
        justifyContent: 'center',
        alignItems:'center'
    },

    buttontext: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
        color:'white'
    },

    signintext: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
        textAlign:'left'
    },

    newtonetflixwrapper: {
        width:'100%'
    },

    newtonetflix: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ccc',
        margin: 15,
        textAlign:'center'
    },

    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex:1
    },

    input: {
        width: '95%',
        height: 50,
        border: 'none',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#333',
        color: 'white',
        marginTop:10
    }

})
