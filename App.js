import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null)
  const [image , setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  useEffect (()=>{
    (async()=>{
      const cameraStatus = await Camera.requestCameraPermissionsAsync
      setCameraPermission (cameraStatus.status==='granted')
    })
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
