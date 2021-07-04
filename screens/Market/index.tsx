import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import styles from "./styles";
import MarketCoin from "../../components/MarketCoin";
const marketCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    valueChange24H: -1.12,
    valueUSD: 69420,
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "USD",
    valueChange24H:3.54,
    valueUSD: 659420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    valueChange24H:-5.43,
    valueUSD: 30120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
  },
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    valueChange24H: -1.12,
    valueUSD: 69420,
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "USD",
    valueChange24H:3.54,
    valueUSD: 659420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    valueChange24H:-5.43,
    valueUSD: 30120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
  },
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    valueChange24H: -1.12,
    valueUSD: 69420,
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "USD",
    valueChange24H:3.54,
    valueUSD: 659420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    valueChange24H:-5.43,
    valueUSD: 30120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
  }, ]
const Market = () => {
  return (
    <View style={styles.root}>
      <Image
        source={require("../../assets/images/Saly-17.png")}
        style={styles.image}
      />
     <Text style={{fontSize:22,fontWeight:'bold'}}>Market</Text>
      <FlatList
        data={marketCoins}
        renderItem={({ item }) => <MarketCoin marketCoin={item} />}
      />
    </View>
  );
};

export default Market;
