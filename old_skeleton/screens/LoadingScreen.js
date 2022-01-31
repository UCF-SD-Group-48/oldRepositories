import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function LoadingScreen({ navigation }) {
  useEffect(
     () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('Dashboard');
        } else {
          navigation.replace('Home');
        }
      });
    }
  );

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
