import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import styles from "./styles";
import PortfolioCoin from "../../components/PortfolioCoin";
const portfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    amount: 69.42,
    valueUSD: 69420,
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "USD",
    amount: 1.12,
    valueUSD: 659420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
  },
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    amount: 69.42,
    valueUSD: 69420,
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "USD",
    amount: 1.12,
    valueUSD: 659420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
  },
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    amount: 69.42,
    valueUSD: 69420,
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "USD",
    amount: 1.12,
    valueUSD: 659420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
  },
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    amount: 69.42,
    valueUSD: 69420,
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "USD",
    amount: 1.12,
    valueUSD: 659420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
  },
];
const Portfolio = () => {
  return (
    <View style={styles.root}>
      <Image
        source={require("../../assets/images/Saly-10.png")}
        style={styles.image}
      />
      <View style={styles.balanceContainer}>
        <Text style={styles.heading}>Portfolio Balance</Text>
        <Text style={styles.balance}>$69.420</Text>
      </View>
      <FlatList
        data={portfolioCoins}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
      />
    </View>
  );
};

export default Portfolio;
