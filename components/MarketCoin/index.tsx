import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
import PercentageChange from "../../utils/PercentageChange";
export const MarketCoinProps = {
  porfolioCoin: {
    image: String,
    name: String,
    symobol: String,
    valueChange24H: Number,
    valueUSD: Number,
  },
};
const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { image, name, symbol, valueChange24H, valueUSD },
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.value}>${valueUSD}</Text>

       <PercentageChange value={valueChange24H}/>
      </View>
    </View>
  );
};

export default MarketCoin;
