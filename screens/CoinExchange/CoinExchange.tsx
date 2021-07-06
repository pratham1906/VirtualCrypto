import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image ,TextInput,Alert,Pressable,KeyboardAvoidingView} from 'react-native'
import styles from './styles'

const CoinExchange = ({route}) => {

    const {isBuy,coinData}=route?.params

    const [coinAmount,setCoinAmount]=useState('')
    const [coinUSDValue,setCoinUSDValue]=useState('')
    const maxUSD = 100000;
    useEffect(() => {
        const amount = parseFloat(coinAmount)
        if (!amount && amount !== 0) {
          setCoinAmount("");
          setCoinUSDValue("");
          return;
        }
        setCoinUSDValue((amount * coinData?.currentPrice).toString());
      }, [coinAmount]);
    
      useEffect(() => {
        const amount = parseFloat(coinUSDValue)
        if (!amount && amount !== 0) {
          setCoinAmount("");
          setCoinUSDValue("");
          return;
        }
        setCoinAmount((amount / coinData?.currentPrice).toString());
      }, [coinUSDValue]);

      const onPlaceOrder = () => {
        if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
          Alert.alert('Error', `Not enough USD coins. Max: ${maxUSD}`);
          return;
        }
        if (!isBuy && parseFloat(coinAmount) > coinData.amount) {
          Alert.alert('Error', `Not enough ${coinData.symbol} coins. Max: ${coinData.amount}`);
          return;
        }
      }
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
      >
            <Text style={styles.title}>{isBuy?"Buy":"Sell"} {coinData.name}</Text>
            <Text style={styles.subtitle}>1 {coinData?.symbol}{'='}${coinData?.currentPrice}</Text>
            <Image source={require('../../assets/images/Saly-31.png')} style={styles.image}/>

            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="0" keyboardType="decimal-pad" value={coinAmount}
                    onChangeText={(text)=>setCoinAmount(text)}/>
                    <Text>{coinData?.symbol}</Text>
                </View>
                <Text style={{alignSelf:'center',fontSize:30}}>=</Text>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="0" keyboardType="decimal-pad"
                    value={coinUSDValue}/>
                    <Text>USD</Text>
                </View>
            </View>
            <Pressable style={styles.button} onPress={onPlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
        </KeyboardAvoidingView>
    )
}

export default CoinExchange
