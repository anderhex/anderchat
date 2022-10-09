import {StyleSheet} from 'react-native';


const homeStyle = StyleSheet.create({

      card:{
        width:'100%',
        height:130,
        backgroundColor:'white',
        margin:2,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:20,
      },
      
      cardOffline:{
        width:'100%',
        height:130,
        backgroundColor:'white',
        opacity:0.6,
        margin:2,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:20,
        disabled:true

      },
      openProfilePic:{
        width:'100%',
        height:'100%',
        position:'absolute',
        zIndex:9999,
        left:0,
        right:0,
        top:50,
        borderRadius:7,
        margin:'auto'
      },
      profilePic:{
        width:80,
        height:80,
        borderRadius:100,
        marginRight:20
      },
      profilePicChat:{
        width:60,
        height:60,
        borderRadius:100,
        marginRight:20
      },
      profileName:{
        fontSize:20
      },
      profileSub:{
        opacity:0.7,
        fontSize:14,
        marginTop:5,
      },
      statusOn:{
        marginBottom:5,
        width:60,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:20,
        backgroundColor:'#00B259',
        borderRadius:20,
      },
      statusOff:{
        marginBottom:5,
        width:60,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:20,
        backgroundColor:'#20202F',
        borderRadius:20,
      },

})

export default homeStyle;