import {StyleSheet} from 'react-native';

const chatStyle = StyleSheet.create({

     view:{
 
        padding:20,
        display:'flex',
        flexDirection:'column',
      
     },
     fromMessage:{
          marginBottom:20,
          backgroundColor:'white',
          padding:20,
          alignSelf:'flex-start',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          borderBottomRightRadius:20,
          maxWidth:380
     },
     toMessage:{
        marginBottom:20,
          backgroundColor:'#054E9E',
          padding:20,
          alignSelf:'flex-end',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          borderBottomLeftRadius:20
     },
     ViewText:{
          width:'100%',
          height:100,
          backgroundColor:'white',
          display:'flex',
          justifyContent:'center',
     alignItems:'center',
     flexDirection:'row',
 
     },
     textArea:{
         
          width:300,
          height:50,
 
     }

});

export default chatStyle;