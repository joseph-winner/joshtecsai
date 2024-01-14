import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Features = () => {
  return (
    <View style={{flex:1, backgroundColor:'#fff', paddingVertical:4, marginHorizontal:12}}>
      <Text style={{fontSize:24, fontWeight:'500', }}>Features</Text>
      <View style={{backgroundColor: 'rgba(80, 200, 120, 0.5)', borderRadius:8, padding: 10, marginTop:15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/images/chatgptIcon.png')}
            style={{width:50, height:50}}></Image>
            <Text style={{fontSize:22, fontWeight:'600', marginLeft:15, color:'#111'}}>ChatGPT</Text>
        </View>
        <Text style={{fontSize:16, marginTop:6}}>
            ChatGPT can provide with you instant and knowledgeable responses, assist you with creactive ideas on a wide range of topics.
        </Text>
      </View>


      <View style={{backgroundColor: 'rgba(128, 128, 128, 0.4);', borderRadius:8, padding: 10, marginTop:15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/images/dalleIcon.png')}
            style={{width:50, height:50}}></Image>
            <Text style={{fontSize:22, fontWeight:'600', marginLeft:15, color:'#111'}}>DALL-E</Text>
        </View>
        <Text style={{fontSize:16, marginTop:6}}>
            DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity
        </Text>
      </View>


      <View style={{backgroundColor: 'rgba(80, 200, 120, 0.6)', borderRadius:8, padding: 10, marginTop:15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/images/smartaiIcon.png')}
            style={{width:50, height:50}}></Image>
            <Text style={{fontSize:22, fontWeight:'600', marginLeft:15, color:'#111'}}>Smart AI</Text>
        </View>
        <Text style={{fontSize:16, marginTop:6}}>
            A powerful voice assistant with abilities of ChatGPT and DALL-E, providing you the best of worlds
        </Text>
      </View>
    </View>
  )
}

export default Features

const styles = StyleSheet.create({})