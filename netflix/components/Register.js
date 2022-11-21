import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore'; 
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';







 const Register = ({ navigation }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async (email, password) => {
    setLoading(true);
    if (!email || !password || !firstname || !lastname) {
      alert('All fields are mandatory');
      setFirstName('');
      setLastName('')
      setPassword('');
      setEmail('');
      setLoading(false);
      
      return;
    }
      const auth = getAuth();

      createUserWithEmailAndPassword(auth,email, password)
        .then(() => {
          alert('Registered successfully');
          navigation.replace('Login');
        })
        .catch(err => {
          setLoading(false);
          setPassword('');
          setEmail('');
          
        
          console.log(err);
        });
    
   
  }

  //register function end

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('netflix/assets/background.png')}
        resizeMode="cover"
        style={{flex: 1, height: Dimensions.get('window').height}}>
        <View style={styles.overlay}>
          <View style={styles.formwrapper}>
            <View style={styles.form}>
              <Text style={styles.signintext}>Sign In</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.halfinput1}
                  placeholder="First Name"
                  placeholderTextColor="grey"
                  value={firstname}
                  onChangeText={text => setFirstName(text)}
                />
                <TextInput
                  style={styles.halfinput2}
                  placeholder="Last Name"
                  placeholderTextColor="grey"
                  value={lastname}
                  onChangeText={text => setLastName(text)}
                />
              </View>
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
                disabled={loading}
                style={styles.submitform}
                activeOpacity={0.5}
                onPress={() => {
                  register(email, password);
                }}>
                <Text style={styles.buttontext}>
                  {loading ? 'loading...' : 'Sign Up'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.newtonetflixwrapper}
                activeOpacity={0.5}
              onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.newtonetflix}>
                  Already have an account? Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  formwrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },

  form: {
    height: 400,
    width: '90%',
    backgroundColor: 'black',
    flexDirection: 'column',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
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
    alignItems: 'center',
  },

  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: 'white',
  },

  signintext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    textAlign: 'left',
  },

  newtonetflixwrapper: {
    width: '100%',
  },

  newtonetflix: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ccc',
    margin: 15,
    textAlign: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },

  input: {
    width: '95%',
    height: 50,
    border: 'none',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#333',
    color: 'white',
    marginTop: 10,
  },

  halfinput1: {
    width: '48%',
    height: 50,
    border: 'none',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#333',
    color: 'white',
    marginTop: 10,
  },

  halfinput2: {
    marginLeft:10,
    width: '40%',
    height: 50,
    border: 'none',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#333',
    color: 'white',
    marginTop: 10,
  },
});
