import * as React from 'react'
import {Text, View, StyleSheet,SafeAreaView,TouchableOpacity,Image,ImageBackground,Platform,StatusBar} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source = {require("../assets/bg_updates.jpg")} style = {styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style = {styles.titletext}> ISS Tracker APP </Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=>{
                        this.props.navigation.navigate("ISS Location")
                    }}>
                        <Text style={styles.routeText}> ISS Location</Text>
                        <Text style={styles.knowMore}> {"Know More --->"}</Text>
                        <Text style={styles.bgDigit}> 1</Text>
                        <Image source={require("../assets/iss_icon.png")}style={styles.iconImage}></Image>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=>{
                        this.props.navigation.navigate("Meteors")
                    }}>
                        <Text style={styles.routeText}> Meteors</Text>
                        <Text style={styles.knowMore}> {"Know More --->"}</Text>
                        <Text style={styles.bgDigit}> 2</Text>
                        <Image source={require("../assets/meteor_icon.png")}style={styles.iconImage}></Image>
                    </TouchableOpacity>

                </ImageBackground>

                                
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titletext: {
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "cursive",
        color: "white",
    },
    droidSafeArea:{
        marginTop: Platform.OS === "andriod" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: 'white',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: "cursive",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15
    },
    bgDigit:{
        position: 'absolute',
        color: "rgba(183, 183, 183, 0.5)",
        zIndex: -1,
        fontSize: 150,
        right: 20,
        bottom: -15,
    },
    iconImage:{
        position: 'absolute',
        height: 150,
        width: 150,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    },
});
