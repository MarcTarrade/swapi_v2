import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Species extends React.Component{
    constructor(props){
        super(props);
        this.state = { species: [] };
    }

    componentDidMount(){
        this.getSpecies();
    }

    render(){
        const Item = ({ title }) => (
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20, color : "white"}}>{title}</Text>
            </View>
          );       

        return(
		<ImageBackground source={image} style={styles.image}>
            <View style={styles.species}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
                    data={this.state.species}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.name}/>)}
                />
            </View>
		</ImageBackground>
        );
    }

    getSpecies(){
        const init = {
            method: 'GET',
            headers: { "Content-Type":"application/json" }
        };
        fetch("https://www.swapi.tech/api/species?page=1&limit=100", init)
        .then((res) => { 
            res.json()
            .then((data) => {
                var res = data.results
                var species = this.state.species;
                res.forEach(element => {
                    species.push(element);
                });
                this.setState({ species : species });
            });
        }).catch(error => console.error(error));
    }

    
}
const image = require('./../assets/background.jpg');
const styles = StyleSheet.create({
    species: {
		textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
		justifyContent: 'center',
        alignItems: 'center',
    },
	image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
export default Species;