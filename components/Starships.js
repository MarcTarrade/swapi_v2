import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Starships extends React.Component{
    constructor(props){
        super(props);
        this.state = { starships: [] };
    }

    componentDidMount(){
        this.getStarships();
    }

    render(){
        const Item = ({ title }) => (
            <View style={{marginTop: 5, marginBottom: 5}}>
              <Text style={{fontSize: 20, color : "white"}}>{title}</Text>
            </View>
          );

        return(
		<ImageBackground source={image} style={styles.image}>
            <View style={styles.starships}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
                    data={this.state.starships}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.name}/>)}
                />
            </View>
		</ImageBackground>
        );
    }

    getStarships(){
        const init = {
            method: 'GET',
            headers: { "Content-Type":"application/json" }
        };
        fetch("https://www.swapi.tech/api/starships?page=1&limit=100", init)
        .then((res) => { 
            res.json()
            .then((data) => {
                var res = data.results
                var starships = this.state.starships;
                res.forEach(element => {
                    starships.push(element);
                });
                this.setState({ starships : starships });
            });
        }).catch(error => console.error(error));
    }
}
const image = require('./../assets/background.jpg');
const styles = StyleSheet.create({
    starships: {
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

export default Starships;