import React, { useState } from "react";
import { StyleSheet, Text, View, Image,Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PercentageChange from "../../utils/PercentageChange";
import CoinPriceGraph from "../../components/CoinPriceGraph/CoinPriceGraph";
import { useNavigation } from "@react-navigation/core";
const historyString=JSON.stringify([ 47222.9831719397,
    47434.65047738381,
    47607.369136516856,
    47074.35527848516,
    46786.501689765224,
    47499.27660080816,
    47815.96175554316,
    48012.57846110786,
    48216.13437588234,
    47781.9580983982,
    47500.21378781513,
    47113.50153492208,
    47221.09573635404,
    47312.30069681106,
    47340.61147144899,
    47049.24407763847,
    47339.15253224385,
    47345.246757007844,
    47531.621858104314,
    47620.34141405727,
    47960.84287845154,
    46716.564311380964,
    47017.8868113775,
    47528.03480509394,
    47555.855803284954,
    47145.24950500805,
    47198.98402769743,
    47500.05891087597,
    47695.1209347129,
    47694.83316871613,
    47414.1862550079,
    47592.08424992752,
    47590.06380247422,
    47769.34130225554,
    47778.97276294089,
    47818.781165819164,
    47824.62281821764,
    47675.591234653235,
    47140.1963883116,
    47355.618365196424,
    47159.431870925095,
    46679.5534155937,
    46296.60220783228,
    46884.18296762147,
    46927.83149245025,
    46926.675372277605,
    46935.95285163663,
    47088.57568866298,
    46687.591577314066,
    46743.48463123342,
    46780.62948197996,
    46837.265603101696,
    47063.25888155468,
    46998.96059525472,
    47007.26367365752,
    47466.74107813106,
    47389.45732031188,
    47303.75277005233,
    47255.606394487055,
    47413.84516967594,
    48759.32424065163,
    48507.061569607475,
    48568.03579792561,
    48461.186989103386,
    49026.84078629081,
    48845.08131650659,
    48875.81890265539,
    49087.20681382356,
    48625.44724393501,
    48638.56669076275,
    48451.08542464199,
    48824.192614890875,
    48558.28196763652,
    48563.903471922786,
    48533.06040750724,
    48744.169304848554,
    48742.10068193661,
    49082.8059943863,
    48565.32288945199,
    48242.91184336785,
    48146.23982322108,
    46862.88823877233,
    47083.03805970495,
    46918.93102691646,
    46770.02817531785,
    47212.2475468462,
    47310.200440076245,
    47579.18764517152,
    47532.0946726225,
    47555.156200437814,
    47709.562084736834,
    47984.41938601861,
    47873.79429902326,
    47657.77874796809,
    48029.345585984294,
    48411.28769411903,
    48432.370637517946,
    48373.73347497062,
    48614.864701755476,
    48585.178531618,
    48259.04975793262,
    48247.94545823356,
    47806.49395997484,
    47900.542137557444,
    48235.82086919736,
    48407.52455320469,
    49483.034495424436,
    49318.51536921472,
    49116.0071028589,
    49041.971850626855,
    49205.41295333544,
    49140.764200887774,
    49227.11549117248,
    48999.836461700266,
    48896.416947644444,
    49702.313299239046,
    48980.09396691239,
    49280.48062069261,
    49239.13787965993,
    48322.658663472626,
    48474.69883801903,
    48698.94853202164,
    48499.49818933812,
    48806.951783605844,
    48605.801317652345,
    49157.713605124474,
    49436.324978116914,
    49195.06703693363,
    49505.19018153466,
    49902.31384685163,
    49622.042976664765,
    49392.447918847654,
    49670.56369991088,
    50501.037141345034,
    50953.51840817563,
    51207.23996437584,
    51545.82175744182,
    51287.70799552459,
    51341.35644229185,
    50608.2247402897,
    51136.15052712996,
    51131.789595611,
    51168.84324568567,
    51274.08540253334,
    51353.337433947876,
    51444.78828512682,
    51999.00814759561,
    52202.32347977574,
    52320.915246127704,
    52115.160034438544,
    52354.33106806803,
    52228.26803271614,
    52183.506133621464,
    52323.19102271347,
    51905.70841194988,
    52163.214648583176,
    52145.038800077054,
    51909.079549463866,
    51992.40196948642,
    51904.70068004216,
    51820.288855346684,
    51665.4776656716,
    51391.90391143333,
    51531.63956470861,
    51886.5132956805,
    52141.260866132485,
    51586.017410455745,
    51950.89679140388])
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

  const navigation=useNavigation();
  const onBuy=()=>{
navigation.navigate('CoinExchange',{
  isBuy:true,
  coinData:coinData
})
  }

  const onSell=()=>{
    navigation.navigate('CoinExchange',{
      isBuy:false,
      coinData:coinData
    })
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
      <CoinPriceGraph dataString={historyString}/>
      <View style={{flexDirection:'row',marginTop:20,width:'100%',justifyContent:'space-between'}}>
<Text style={{fontSize:18,marginLeft:10}}>Positon</Text>
<Text style={{fontSize:18,marginRight:20}}>{coinData.symbol}{' '} {coinData.amount} (${coinData.currentPrice * coinData.amount})</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:'auto'}}> 
          <Pressable style={[styles.button,{backgroundColor:'#20B100'}]} onPress={onBuy}>
              <Text style={{fontWeight:'bold',color:'white'}}>Buy</Text>
          </Pressable>
          <Pressable style={[styles.button,{backgroundColor:'red'}]} onPress={onSell}>
              <Text style={{fontWeight:'bold',color:'white'}}>Sell</Text>
          </Pressable>
      </View>
    </View>
  );
};

export default CoinDetails;
