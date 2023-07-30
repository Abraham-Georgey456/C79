import * as React from 'react';
import {Text, View ,StyleSheet, Alert} from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            meteors: {}, 
        };
    }
    componentDidMount(){
        this.getMeteors();
    }

    getMeteors=()=>{
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=Z4Fdx9HhBlMiw7DS1qlnDsSLvVomdzGx4y2xBewx")
            .then(response=>{
                this.setState({meteors: response.data.near_earth_objects})
            })
            .catch(error=>{
                Alert.alert(error.message)
            });
    }

    render(){
        if(Object.keys(this.state.meteors).length === 0){
            return(
                <View style = {styles.container}>
                   <Text style = {styles.text}>Loading ......</Text>
                </View>
               );
        }else{
            let meteor_arr = Object.keys(this.state.meteors).map(meter_date=>{
                return this.state.meteors[meter_date]
            });
            let meteors= [].concat.apply([],meteor_arr);
            meteors.forEach(function(element){
                let diameter=(element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max)/2
                let threatScore= (diameter/close_approach_data[0].miss_distance.kilometers) * 1000000000
                element.threat_score= threatScore;
            });
            return(
                <View style = {styles.container}>
                   <Text style = {styles.text}>Meteor Screen</Text>
                </View>
               );
        }
       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "cursive",
    },
});
