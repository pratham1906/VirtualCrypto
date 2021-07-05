import React, { useState } from "react";
import { StyleSheet, Text, View, Image,Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PercentageChange from "../../utils/PercentageChange";
const CoinDetails = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
    symbol: "BTC",
    name: "Bitcoin",
    valueChange24H: -1.12,
    valueUSD: 59420,
    valueChange1D: 2.12,
    valueChange1H: 1.54,
    valueChange7D: -1.12,
    currentPrice: 59420,
    amount:2
  });

  const onBuy=()=>{

  }

  const onSell=()=>{

  }
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image source={{ uri: coinData.image }} style={styles.image} />
          <View>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <AntDesign
            name="staro"
            size={30}
            color={"#2f95dc"}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width:'100%',
          
        }}
      >
        <View style={styles.currentPriceContainer}>
          <Text style={styles.label}>Current Price</Text>
          <Text style={styles.currentPrice}>{coinData.currentPrice}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>1 Hour</Text>
          <PercentageChange value={coinData.valueChange1H} />
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>1 Day</Text>
          <PercentageChange value={coinData.valueChange1D} />
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>7 Days</Text>
          <PercentageChange value={coinData.valueChange7D} />
        </View>
      </View>
      <View style={{flexDirection:'row',marginTop:20,width:'100%',justifyContent:'space-between'}}>
<Text style={{fontSize:18,marginLeft:10}}>Positon</Text>
<Text style={{fontSize:18,marginRight:20}}>{coinData.symbol}{' '} {coinData.amount} (${coinData.currentPrice * coinData.amount})</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:'auto'}}> 
          <Pressable style={[styles.button,{backgroundColor:'#20B100'}]}>
              <Text style={{fontWeight:'bold',color:'white'}}>Buy</Text>
          </Pressable>
          <Pressable style={[styles.button,{backgroundColor:'red'}]}>
              <Text style={{fontWeight:'bold',color:'white'}}>Sell</Text>
          </Pressable>
      </View>
    </View>
  );
};

export default CoinDetails;
