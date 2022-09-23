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
    })();
  },[]);

  const takePicture = async () =>{
    if (camera){
      const data = await camera.takePictureAsync(null)
      setImage (data.uri);
    }
    if(cameraPermission === false){
      return <Text>No camera Access </Text>
    }

  }
  return (
    <View style={{flex:1}}>
      <View style={style.cameraContainer}>
        <Camera ref={ref =>setCamera(ref)}
        style={Style.fixedRatio}
        type={type}
        ratio={'1:1'}
        />
      </View>
      <Button
      title='Flip Camera'
      onPress={()=>{
        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.font : Camera.Constants.Type.back);
      }}
      ></Button>

      <Button title = "take Picture"
      onPress={() => takePicture()}
      />
      {image && <Image source={{uri: image}} style={{flex:1}}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection:'row'
  },
  fixedRatio:{
    flex
  }

});
