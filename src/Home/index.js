import {React, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import profiles from './profiles';
import homeStyle from './style';

const  title = "Anderchat";

function ProfilePic(props){
    [imgStyle, setImgStyle] = useState(homeStyle.profilePic);

    function handleClick(){
        if(imgStyle == homeStyle.profilePic)
        setImgStyle(homeStyle.openProfilePic);
        else 
        setImgStyle(homeStyle.profilePic);
    }
        return (
            <Image style={imgStyle} source={{uri:props.src}} onPress={handleClick}/>
        )
}
function Status(props){

    let styleStatus = props.now ? homeStyle.statusOn : homeStyle.statusOff;

    return (
             <View style={styleStatus}>
                <Text style={{color:'white'}}>{props.now ? 'Online' : 'Offline' }</Text>
             </View>
    )
}
function ProfileInfo(props){
    return (
        <View>
             <Status now={props.status}/>
             <Text style={homeStyle.profileName}>{props.name}</Text>
             <Text style={homeStyle.profileSub}>{props.sub}</Text>
        </View>
    )
}
function Card(props){
    let opacityByStatus = props.status ? homeStyle.card : homeStyle.cardOffline;

    return (
        <TouchableOpacity style={opacityByStatus} onPress={props.click}>{props.children}</TouchableOpacity>
    )
}
function Profile(props){


    return (
        <Card click={props.click} status={props.status}>
          
        <ProfilePic src={props.image}/>
    
        <ProfileInfo name={props.name} sub={props.sub} status={props.status}/>
    
        </Card>
    )

}

export default function Home({navigation}){



return (
        <ScrollView>
               
          {
            profiles.map((profile, index)=>
                 (
                    <Profile  key={index}
                    name={profile.name}
                    sub={profile.sub}
                    image={profile.image}
                    status={profile.status} click={()=>navigation.navigate('Chat', profile)}/>
                )
            )
          }


        </ScrollView>
)

}