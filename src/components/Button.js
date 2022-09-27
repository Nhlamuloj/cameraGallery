import* as React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'

export default  function Button({title,onPress,color}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    button:{
        height:40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center'

    },

    text:{
         fontWeight:'bold',
         fontSize:16,
         color: 'white',
         marginLeft:10,

    }
})