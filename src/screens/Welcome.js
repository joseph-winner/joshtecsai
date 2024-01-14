import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex:1, justifyContent: "space-around", backgroundColor: 'white'}}>
        <View>
            <Text style={{textAlign: "center", fontSize:32, fontWeight: "700", marginTop: 10}}>
                JOSHTECS AI
            </Text>
            <Text style={{textAlign: "center", fontSize:18, fontWeight: "400", color: '#aaa'}}>
                The Future is here, Powered by AI
            </Text>
        </View>
        <View style={{flex:1, alignItems: 'center', marginTop: 20}}>
            <Image source={require('../../assets/images/welcome.png')} style={{width:'65%', height:'65%',objectFit: 'contain'}} ></Image>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}
        style={{
            marginBottom: 20, backgroundColor: '#50C878',
            padding: 15, marginHorizontal: 20,
            borderRadius: 10}}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize:22, fontWeight: '700',}} >Get started</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({

})