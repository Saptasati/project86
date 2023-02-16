import React,{Component} from 'react';
import {Text, View, Stylesheet, ImageBackground} from 'react-native';

export default class App extends Component {
render(){
  return(
    <View style={styles.container}>
      <ImageBackground 
      style={styles.image}
      src={require('assets/background.jpg')}>
    <Text style={styles.text}> My Homepage </Text>
    </ImageBackground>
    </View>
  )
  }
}
const styles = Stylesheet.create({
  container:{
    flex:1
  },
  text:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      color:"blue",
      fontWeight:'bold',
      fontSize:45
  },
  image:{
    flex:1,
    resizeMode:'cover'
  }
})