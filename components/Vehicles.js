import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Vehicles extends React.Component{
    constructor(props){
        super(props);
        this.state = { vehicles: [] };
    }

    componentDidMount(){
        this.getVehicles();
    }

    render(){
        const Item = ({ title }) => (
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20, color : "white"}}>{title}</Text>
            </View>
          );       

        return(
		<ImageBackground source={image} style={styles.image}>
            <View style={styles.vehicles}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
                    data={this.state.vehicles}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.name}/>)}
                />
            </View>
		</ImageBackground>
        );
    }

    getPlanets(){
        const init = {
            method: 'GET',
            headers: { "Content-Type":"application/json" }
        };
        for (let i = 1; i <= 6; i++) {
            fetch("https://www.swapi.tech/api/planets/?page="+i, init)
            .then((res) => {
                res.json()
                .then((data) => {
                    var res = data.results
                    var planets = this.state.planets;
                    res.forEach(element => {
                        planets.push(element);
                    });
                    this.setState({ planets : planets });
                });
            }).catch(error => console.error(error));
        }
    }

    
}
const image = require('./../assets/background.jpg');
const styles = StyleSheet.create({
    vehicles: {
		textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
	image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default Vehicles;