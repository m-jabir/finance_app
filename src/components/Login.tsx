import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView, 
  Platform,
} from 'react-native';
// import EyeIcon from '../../../assets/'; // adjust the path to your structure
import { Image } from 'react-native'; // Make sure you import Image

// import Icon from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#00D084"
        barStyle={Platform.OS === 'android' ? 'dark-content' : 'light-content'}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>welcome</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Username Or Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.passwordInput}
            placeholder="●●●●●●●●"
            placeholderTextColor="#aaa"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
     <TouchableOpacity onPress={() => setSecureText(!secureText)}> 
  <Image
    source={require('../assets/eye-pass.png')}


    style={{ width:30, backgroundColor: 'black', height:12, marginRight: 10 }}
  />
</TouchableOpacity>


        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.fingerprintText}>
          Use <Text style={styles.fingerprintBold}>Fingerprint</Text> To Access
        </Text>

        <Text style={styles.orText}>or sign up with</Text>

        <View style={styles.socialIcons}>
          {/* <Icon name="logo-google" size={30} color="#000" />
          <Icon name="logo-facebook" size={30} color="#000" style={{ marginLeft: 30 }} /> */}
        </View>

        <Text style={styles.signupPrompt}> 
          Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </View>

    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  safeArea: {
   flex: 1,
    backgroundColor: '#00D084',
    //  justifyContent: 'flex-end',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    
  },
  headerText: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 40,
    
  },

  container: {
    backgroundColor: '#fff',
    marginHorizontal: 0,
    marginTop:20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // borderBottomLeftRadius: 40, 
    // borderBottomRightRadius: 40, 
    padding: 25,
    paddingBottom: 40,
    marginBottom: 0, 
    flexGrow: 1,
  },


  label: {
    fontSize: 14,
    marginTop: 35,
    marginBottom: 5,
    color: '#093030',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 20,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    
  },
  passwordInput: {
    flex: 1,
    // paddingVertical: 12,
    fontSize: 20,
  },


  loginBtn: {
    width: 207,
    height: 45,
    backgroundColor: '#00D084',
    padding: 8,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 60,
    alignSelf: 'center',

  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  forgotText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  signupBtn: {
    backgroundColor: '#e6f7f1',
    padding: 9,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
    width: 207,
    height: 45,
    alignSelf: 'center',
  },
  signupText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,


  },
  fingerprintText: {
    textAlign: 'center',
    color: '#333',
    marginTop: 20,
  },
  fingerprintBold: {
    fontWeight: 'bold',
    color: 'blue',    
  },
  orText: {
    textAlign: 'center',
    color: '#aaa',
    marginVertical: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signupPrompt: {
    textAlign: 'center',
    color: '#555',
  },
  signupLink: {
    color: 'blue',
  },
});
export default Login;