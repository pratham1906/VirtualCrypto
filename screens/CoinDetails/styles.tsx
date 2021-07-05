import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
  flex:1,
    alignItems: "center",
    backgroundColor:'white'
  },
  topContainer: {
marginTop:20,
    alignItems: "center",
    backgroundColor: "white",
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between'

  },
  image: {
    height: 50,
    width: 50,
    marginLeft:10
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft:10
  },
  symbol: {
    color: "#6b6b6b",
    marginLeft:10
  },
  left: {
    flexDirection: "row",
  },
  valueContainer:{
alignItems:'center',
marginHorizontal:5
  },
  currentPriceContainer:{
marginLeft:20
  },
  label:{
color:'#545454',
marginBottom:10
  },
  currentPrice:{
      fontSize:24,
      fontWeight:'bold'
  },
  button:{
      width:'40%',
      height:50,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center',
      margin:15
  }
});

export default styles;
