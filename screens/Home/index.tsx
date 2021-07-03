import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import styles from './styles'
const Home = () => {
    return (
        <View style={styles.root}>
            <Image source={require('../../assets/images/Saly-1.png')} style={styles.image}/>
            <Text style={styles.title}>Welcome to Vcrpyto</Text>
            <Text style={styles.subTitle}>Invest your virtual $100.00 and compete with others</Text>
        </View>
    )
}

export default Home

