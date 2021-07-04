import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import styles from './styles'
export const PortfolioCoinProps={
porfolioCoin:{
    image:String,
name:String,
symobol:String,
amount:Number,
valueUSD:Number
}
}
const PortfolioCoin = (props:PortfolioCoinProps) => {

    const {
        portfolioCoin:{
            image,
            name,
            symbol,
            amount,
            valueUSD
        }

    }=props;
    return (
        <View style={styles.root}>
            <View style={styles.left}>
               <Image source={{uri:image}} style={styles.image}/>
          <View>
<Text style={styles.name}>{name}</Text>
<Text style={styles.symbol}>{symbol}</Text>
          </View>
          </View>
          <View style={{alignItems:'flex-end'}}>
              <Text style={styles.value}>${valueUSD}</Text>
            
              <Text style={styles.symbol}>{symbol} {amount}</Text>
          </View>
        </View>
    )
}

export default PortfolioCoin

