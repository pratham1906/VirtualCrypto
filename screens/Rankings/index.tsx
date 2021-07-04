import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import styles from "./styles";
import RankingListItem from "../../components/RankingListItem.js";
const rankingsData = [
    {
      id: "1",
      name: "Pratham Meghani",
      netWorth: 69420,
      image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    },
    {
      id: "2",
      name: "Pratham Meghani",
      netWorth: 659420,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
    },
    {
      id: "3",
      name: "Pratham Meghani",
      netWorth: 30120,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
    },
    {
      id: "1",
      name: "Pratham Meghani",
      netWorth: 69420,
      image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    },
    {
      id: "2",
      name: "Pratham Meghani",
      netWorth: 659420,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
    },
    {
      id: "3",
      name: "Pratham Meghani",
      netWorth: 30120,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
    },
    {
      id: "1",
      name: "Bitcoin",
      netWorth: 69420,
      image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    },
    {
      id: "2",
      name: "Pratham Meghani",
      netWorth: 659420,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
    },
    {
      id: "3",
      name: "Pratham Meghani",
      netWorth: 30120,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
    }, ]
const Rankings = () => {
  return (
    <View style={styles.root}>
      <Image
        source={require("../../assets/images/Saly-20.png")}
        style={styles.image}
      />
      <FlatList
        data={rankingsData}
        renderItem={({ item,index }) => <RankingListItem user={item} place={index+1} />}
      />
    </View>
  );
};

export default Rankings;
