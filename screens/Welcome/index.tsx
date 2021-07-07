import React from 'react'
import { StyleSheet, Text, View ,Image,Pressable} from 'react-native'
import styles from './styles'
const Welcome = () => {

    const signInGoogle=()=>{

    }
    return (
        <View style={styles.root}>
            <Image source={require('../../assets/images/Saly-1.png')} style={styles.image}/>
            <Text style={styles.title}>Welcome to Vcrpyto</Text>
            <Text style={styles.subTitle}>Invest your virtual $100.00 and compete with others</Text>
            <Pressable onPress={signInGoogle} style={{marginTop:'auto',marginBottom:50}}>
            <Image source={require('../../assets/images/google_signin.png')}
            style={{height:50,resizeMode:'contain'}}/>
            </Pressable>
        </View>
    )
}

export default Welcome

