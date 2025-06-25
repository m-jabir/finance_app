import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  // Image,
} from 'react-native';
import { Image } from 'react-native'; 

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);

  return (
    <View style={styles.screen}>
      <StatusBar
        backgroundColor="#00D084"
        barStyle={Platform.OS === 'android' ? 'dark-content' : 'light-content'}
      />

      {/* Green Header with Heading */}
      <View style={styles.header}>
        <Text style={styles.heading}>Create Account</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.whiteContainer}>
          {/* Full Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
            placeholderTextColor="#7a9e9e"
            />
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              placeholderTextColor="#7a9e9e"
            />
          </View>

          {/* Mobile Number */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="123 456 789"
              placeholderTextColor="#7a9e9e"
            />
          </View>

          {/* Date of Birth */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="DD / MM / YYYY"
              placeholderTextColor="#7a9e9e"
            />
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="●●●●●●"
                placeholderTextColor="#7a9e9e"
                secureTextEntry={hidePassword}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Image
                 source={require('../assets/eye-pass.png')}
                

                  style={{ width: 30, height: 12, marginRight: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="●●●●●●"
                placeholderTextColor="#7a9e9e"
                secureTextEntry={hideConfirm}
              />
              <TouchableOpacity onPress={() => setHideConfirm(!hideConfirm)}>
                <Image
                    source={require('../assets/eye-pass.png')}
                    style={{ width: 30, height: 12, marginRight: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms & Policy */}
          <Text style={styles.terms}>
            By continuing, you agree to{' '}
            
          </Text>

          <Text style={styles.orunderline}>Terms of Use and Privacy Policy </Text> {' '}
          
            {/* <Text style={styles.orunderline}></Text>. */}

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Footer Link */}
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>Log In</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#00D084',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#093030',
  },
  scrollContainer: {
    paddingBottom: 60,
  },
  whiteContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    padding: 50,
    flexGrow: 2,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 6,
    color: '#093030',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#d7f2e8',
    borderRadius: 20,
    
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d7f2e8',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 12,
  },
  terms: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginVertical: 10,
  },
  underline: {
    // fontWeight: 'bold',
    // textDecorationLine: 'underline',
  },
    orunderline: {
    // fontWeight: 'bold',
    //  textDecorationLine: 'underline',
    textAlign:'center',
  },
  signupButton: {
    backgroundColor: '#00D084',
    borderRadius: 25,
    paddingVertical: 10,
    marginLeft: 70,
    marginRight: 70,
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
  loginLink: {
    color: '#00D084',
    fontWeight: '600',
  },
});

export default SignUp;