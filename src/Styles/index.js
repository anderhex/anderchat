import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({

    view:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       padding:20,
       flexDirection:'column',
    },
    title:{
     textAlign:'left',
     fontSize:20,
     marginBottom:10
    }, 
    viewAbout:{
        padding:20,
        backgroundColor:'white',
        minWidth:320,
        
     },
    profilePic:{
        width:80,
        height:80,
        backgroundColor:'black',
        borderRadius:100,
        margin:20
    },
    button:{
        width:100,
        margin:10,
        backgroundColor:'red'
    }

});

export default Styles;