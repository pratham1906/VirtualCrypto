import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    padding:20,
    backgroundColor:'white'
},
title:{
    fontSize:24,
fontWeight:'bold'

},
subtitle:{
    fontSize:18,
marginVertical:10,
color:'#5f5f5f'

},
image:{
    height:200,
    resizeMode:'contain'
},
inputContainer:{
    borderColor:'#b1b1b1',
    borderWidth:1,
    padding:15,
    width:'40%',
    justifyContent:'space-between',
    flexDirection:'row'
}
,
  button: {
    backgroundColor: '#0097ff',
    marginTop: 'auto',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }

})

export default styles;