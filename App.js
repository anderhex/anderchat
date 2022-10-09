import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from  './src/Home';
import Chat from './src/Chat';
import homeStyle from './src/Home/style';
import { useState } from 'react';

const  title = "Anderchat";

const Stack = createNativeStackNavigator();



function ChatHeader(props){
  [imgStyle, setImgStyle] = useState(homeStyle.profilePicChat);
  function handleClick(){
      if(imgStyle == homeStyle.profilePicChat)
      setImgStyle(homeStyle.openProfilePic);
      else 
      setImgStyle(homeStyle.profilePicChat);
  }

     return (
      <View style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', height:80}}>
         <Image style={imgStyle} source={{uri:props.image}} onProgress={handleClick}/>
        <Text style={{fontSize:20}}>{props.name}</Text>
     
      </View>
     )

}
function HomeHeader(props){
   return (
    
    <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
 
  <Text style={{fontSize:20}}>{title}</Text>
 </View>
   )
}
export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{headerTitle:(props)=>(<HomeHeader/>)}} />
         <Stack.Screen name="Chat" component={Chat}  options={({route})=>({
          headerTitle:(props)=><ChatHeader name={route.params.name} image={route.params.image}/>,
          
          
         })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 
