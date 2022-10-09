/* AnderHex! */
import React from 'react';
import { useEffect } from 'react';
import {useState, useRef, Component} from 'react';
import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import * as messageStorage from './messageStorage';
import Icon from 'react-native-vector-icons/FontAwesome';
import chatStyle from './style';
import { TouchableOpacity } from 'react-native';
 

function FromMessage(props){

    return (
        <View style={chatStyle.fromMessage}>
            <Text>
                {props.children}
            </Text>
        </View>
    )
}

function ToMessage(props){

    return (
        <View style={chatStyle.toMessage}>
            <Text style={{color:'white'}}>
                {props.children}
            </Text>
        </View>
    )
}

 
export default function Chat({route, navigation}){
    const [idSide, setIdSide] = useState(0);
    const [chatColor, setChatColor] = useState("#054E9E");
    const messageInputText = useRef();
    const messagesScrollView = useRef();
    const [msgInput, setMsgInput] = useState();
    const [messages, setMessage]  = useState([]);
    
    useEffect(()=>{loadMessages()}, [])

    async function loadMessages(){
        let messageArr = await messageStorage.getMessages();
        setMessage(messageArr);
    }
     
    function handleTextInput(event){
       const {text} = event.nativeEvent;
       setMsgInput(text);
    }
    async function addNewMessage(){
              if(msgInput === "" || msgInput === null)
              return;
              let to = idSide == route.params.id ? 0 : route.params.id;
              await messageStorage.saveMessage({from:idSide, to:to, text:msgInput});
              messageInputText.current.clear();
              messagesScrollView.current.scrollToEnd({animated:true});
              setMsgInput("");
              await loadMessages();
     } 
     function changeSide(){
         if(idSide === 0){
            setIdSide(route.params.id);
            setChatColor("green");
         }else{
            setIdSide(0);
            setChatColor("#054E9E");
         }
        
        
     }

return (
 <View style={{height:'100%'}}>
    <ScrollView ref={messagesScrollView} style={{padding:10}}>
    {
    messages.map((message, index) =>{
    

        // To = azul

        if(message.to === route.params.id)
        return (<ToMessage key={index}>{message.text}</ToMessage>);
        else if(message.from === route.params.id)
        return (<FromMessage key={index}>{message.text}</FromMessage>)
       

    })
   }
    </ScrollView>
 <View style={chatStyle.ViewText} >
 <TouchableOpacity onPress={changeSide}style={{width:40, height:40}}>
 <Icon name="exchange" size={30}   ></Icon>
 </TouchableOpacity>
          <TextInput 
          style={chatStyle.textArea}
          placeholder="Mensagem"
           onChange={handleTextInput}
           ref={messageInputText}
           ></TextInput>
           
        <View>
            
       <TouchableOpacity  onPress={addNewMessage} style={{width:30, height:30}}>
       <Icon name="send" size={30} color={chatColor}/>
        
       </TouchableOpacity>
        </View>
 </View>
 </View>
)

}