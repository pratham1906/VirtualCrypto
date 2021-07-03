import React, { useState } from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image:{
height:'40%',
aspectRatio:1,
marginTop:30
    },
    root:{
alignItems:'center',
flex:1,
backgroundColor:'white'
    },
    title:{
        marginTop:15,
fontSize:30,
fontWeight:'bold',
margin:5
    },
    subTitle:{
fontSize:20,
textAlign:'center',
color:'#707070',
margin:5
    }
})

export default styles;
