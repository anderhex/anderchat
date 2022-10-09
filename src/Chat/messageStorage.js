import { AsyncStorage } from 'react-native';


const storageKey = 'anderchat:12'


export const getMessages = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(storageKey)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
      } catch(e) {
        alert(e)
      }
  }
  

export async function saveMessage(msgObj){  

    let  messages  = await getMessages();
    
    if(messages == [])
    messages = [];

    let newMessages = [...messages, msgObj];
      await AsyncStorage.setItem(storageKey, JSON.stringify(newMessages));
 
     return newMessages;

}