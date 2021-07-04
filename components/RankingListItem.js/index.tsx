import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
export const UserRankingItemProps = {
  user: {
    image: String,
    name: String,
    netWorth:Number,
  },
  place:Number
}
const RankingListItem = (props: UserRankingItemProps) => {
  const {
    user: { image, name, netWorth },place
  } = props;
  return (
    <View style={styles.root}>
    <View style={styles.left}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Text style={{marginRight:10,fontSize:18,fontWeight:'bold'}}>{place}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={{justifyContent:'center'}}>
        <Text style={styles.name}>{name}</Text>
      </View>
      </View>
    <View style={{ alignItems: "flex-end"}}>
      <Text style={styles.value}>${netWorth}</Text>
    </View>
  </View>
  );
};

export default RankingListItem;
