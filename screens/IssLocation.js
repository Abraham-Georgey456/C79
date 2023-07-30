import  React,{Component} from 'react';
import {Text, View, StyleSheet, StatusBar, Image,ImageBackground, SafeAreaView, Alert, Platform} from 'react-native';
import axios, { Axios } from 'axios';
import MapView,{Marker} from 'react-native-maps';

export default class IssLocationScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            location: {}
        }
    }
    componentDidMount(){
        this.getIssLocation();
    }

    getIssLocation=()=>{
        axios 
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response=>{
                this.setState({location: response.data});
            })
            .catch(error=>{
                Alert.alert(error.message);
            })
    }

    render(){
        if(Object.keys(this.state.location).length === 0){
            return(
                <View style = {styles.container}>
                    <Text style = {styles.text}>Loading...</Text>
                </View>
            )
        }else{
            return(
                <View style = {styles.container}>
                    <SafeAreaView style = {styles.driodSafeArea} />
                        <ImageBackground source = {require("../assets/bg_image.png")} style = {styles.backgroundImage}>
                            <View style= {styles.titleContainer}>
                            <Text style = {styles.titleText}>  Iss Location Screen  </Text>
                            </View>
                            <View style = {styles.mapContainer}>
                                <MapView 
                                    style = {styles.map}
                                    region={{
                                        latitude:this.state.location.latitude,
                                        longitude:this.state.location.longitude,
                                        latitudeDelta:100,
                                        longitudeDelta:100
                                    }}>
                                    <Marker
                                    coordinate={{latitude: this.state.location.latitude,longitude:this.state.location.longitude}}>
                                        <Image source={require("../assets/iss_icon.png")} style = {{ height:50 , width: 50}} />
                                    </Marker>
                                </MapView>
                                <View> 
                                    <Text style={styles.infoText}>latitude</Text>
                                    <Text style={styles.infoText}>longitude</Text>
                                    <Text style={styles.infoText}>Altitude</Text>
                                    <Text style={styles.infoText}>Velocity </Text>
                                </View>
                            </View>
                           
                        </ImageBackground> 
                   
                </View>
                
            )

        }
       
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover,'
    },
    titleContainer:{
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "cursive",
        color:"white"
    },
    driodSafeArea: {
        marginTop: Platform.OS === "android"? statusbar.currentHeight : 0
    },
    map: {
        width: "100%",
        height: "100%",
    },
    mapContainer: {
        flex: 0.7,
        }

});
