import Voice from '@react-native-community/voice';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Features from '../components/Features'
import { dummyMessages } from '../constants/Index'

const HomeScreen = () => {
    const [messages, setMessages] = useState(dummyMessages)
    const [recording, setRecording] = useState(false)
    const [speaking, setSpeaking] = useState(true)
    const [result, setResult] = useState('');


    const speechStartHandler = e=>{
        console.log("Speech started")
    }

    const speechEndHandler = e=>{
        setRecording(false)
        console.log("Speech Ended")
    }

    const speechResultHandler = e=>{
        console.log("Speech Event:", e)
        const text = e.value[0];
        setResult(text);
    }
    const speechErrorHandler = e=>{
        console.log("Speech error:", e)
    }

    // const startRecording = async () =>{
    //     setRecording(true);
    //     if (!Voice) {
    //         try {
    //             await Voice.start('en-US');
    //         } catch (e) {
    //             console.log("Error:", e);
    //         }
    //     } else {
    //         console.error('Voice is null');
    //     }
        
    // }


    const startRecording = async () => {
        setRecording(true);
        if (!Voice) {
            console.error('Voice is null');
            return;
        }
        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error("Error:", e);
        }
    }

    const endRecording = async () =>{
        try{
            await Voice.stop()
            setRecording(false);
        } catch(e){
            console.log("Error:", e)
        }
    }

    const clear = () =>{
        setMessages([]);
    }

    const stopSpeaking = () =>{
        setSpeaking(false)
    }

    useEffect(() =>{
        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndHandler;
        Voice.onSpeechResults = speechResultHandler;
        Voice.onSpeechError = speechErrorHandler;
        
    },[])

  return (
    <View style={{flex:1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{flex:1, marginHorizontal:5}}>
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../../assets/images/bot.png')} style={{width: 100, height: 100, objectFit: 'contain'}} ></Image>
        </View>

        {
            messages.length>0? (
                <View style={{marginHorizontal:10, flex:1}}>
                    <Text style={{fontWeight:'500', fontSize:18, color:'#000'}}>
                        Josh.AI
                    </Text>

                    <View style={{height:'90%', borderRadius:15, backgroundColor:'#aaa', marginTop:10,}}>
                        <ScrollView bouces={false} showsVerticalScrollIndicator={false} style={{marginHorizontal:5}} >
                            {
                                messages.map((message, index) => {
                                    if(message.role==='assistant'){
                                        if(message.content.includes('https://')){
                                            return(
                                                <View key={index} style={{flexDirection:'row', alignItems:'flex-start', width:'80%'}}>
                                                    <View style={{padding:10, flex:1, borderRadius:10, alignItems: 'flex-start', marginHorizontal:10, backgroundColor:'rgba(80, 200, 120, 0.5)',borderTopLeftRadius:0, marginTop:10 }} >
                                                        <Image source={{uri: message.content}} style={{width:220, height: 220, borderRadius:15, objectFit: 'contain'}} ></Image>
                                                    </View>
                                                </View>
                                            )

                                        } else{
                                            return(
                                            <View key={index}
                                            style={{fontSize:16, 
                                            color:'#000', marginTop:10, 
                                            marginBottom:2, backgroundColor:'rgba(80, 200, 120, 0.5)', marginHorizontal:10, maxWidth:'70%', borderRadius: 10, padding:10, borderTopLeftRadius:0}}>
                                            <Text style={{color:'#000',}}>
                                                {message.content}
                                            </Text>
                                            </View>
                                            )
                                        }
                                    }else{
                                        return(
                                            <View key={index} style={{flex:1, alignItems: 'flex-end', }} >
                                            <View 
                                            style={{fontSize:16, 
                                            color:'#000', marginTop:10, 
                                            marginBottom:2, backgroundColor:'#fff', marginHorizontal:10, maxWidth:'70%', borderRadius: 10, padding:10, borderTopRightRadius:0}}>
                                            <Text>
                                                {message.content}
                                            </Text>
                                            </View>
                                        </View>
                                        )
                                    }
                                })
                            
                            }
                        </ScrollView>
                    </View>

                </View>
            ) : (
                <Features />
            ) 
        }

        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        {
                speaking &&(
                    <TouchableOpacity onPress={stopSpeaking} style={{backgroundColor:'red', borderRadius:20, padding:10, marginRight:40, }} >
                        <Text style={{color: '#fff', fontWeight:'500'}} >Stop</Text>
                    </TouchableOpacity>
                )
            }
            {
                recording? (
                    <TouchableOpacity onPress={endRecording}>
                        {/* RECORDING END BUTTON */}
                        <Image source={require('../../assets/images/voiceLoading.gif')} style={{width: 70, height: 70, objectFit: 'contain'}} ></Image>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={startRecording}>
                        {/* RECORDING START BUTTON */}
                        <Image source={require('../../assets/images/recordingIcon.png')} style={{width: 70, height: 70, objectFit: 'contain'}} ></Image>
                    </TouchableOpacity>
                )
            }
            {
                messages.length>0 &&(
                    <TouchableOpacity onPress={clear} style={{backgroundColor:'#ccc', borderRadius:20, padding:10, marginLeft:40, }} >
                        <Text style={{color: '#fff', fontWeight:'500'}} >Clear</Text>
                    </TouchableOpacity>
                )
            }
            
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})