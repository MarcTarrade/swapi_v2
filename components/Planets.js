import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Planets extends React.Component{
    constructor(props){
        super(props);
        this.state = { planets: [] };
    }

    componentDidMount(){
        this.getPlanets();
    }

    render(){
        const Item = ({ title }) => (
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20, color : "white"}}>{title}</Text>
            </View>
          );

        return(
		<ImageBackground source={image} style={styles.image}>
            <View style={styles.planets}>
				
					<FlatList
						contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
						data={this.state.planets}
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
        fetch("https://www.swapi.tech/api/planets?page=1&limit=100", init)
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
const image = require('./../assets/background.jpg');
const styles = StyleSheet.create({
    planets: {
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

export default Planets;