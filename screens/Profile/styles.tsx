import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      },
      image: {
        height: 175,
        resizeMode: "contain",
        marginTop: "10%",
      },
      userContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        height: 50,
        margin: 10,
        alignItems: "center",
        marginVertical: 10,
      },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  symbol: {
    color: "#6b6b6b",
  },
  left: {
    flexDirection: "row",
  },
  value: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    marginRight:15
  },
  email:{

  },
  profileImage:{
width:70,
height:70,
marginRight:10,
borderRadius:50,
marginLeft:20
  }

})

export default styles;