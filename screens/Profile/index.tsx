import React,{useState} from 'react'
import { StyleSheet, Text, View ,Image,Pressable} from 'react-native'
import styles from './styles'
const Profile = () => {

    const [user,setUser]=useState({
        id:'1',
        name:"Pratham Meghani",
        email:"abc123@gmail.com",
        netWorth:12424,
        image:'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg'
    })

    const signOut=()=>{
        console.warn("Signout")
    }
    return (
        <View style={styles.root}>
        <Image source={require('../../assets/images/Saly-16.png')} style={styles.image}/>
        <View style={styles.userContainer}>
        <View style={styles.left}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Image source={{ uri: user.image }} style={styles.profileImage} />
      </View>
      <View style={{justifyContent:'center'}}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      </View>
    <View style={{ alignItems: "flex-end"}}>
      <Text style={styles.value}>${user.netWorth}</Text>
    </View>
        </View>
     <Pressable onPress={signOut} style={{marginTop:'90%'}}>
         <Text style={{fontSize:18,fontWeight:'bold'}}>Sign out</Text>
     </Pressable>
        </View>
    )
}

export default Profile

