import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
              <Text style={{fontSize: 20}}>{title}</Text>
            </View>
          );       

        return(
            <View style={styles.species}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
                    data={this.state.species}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.name}/>)}
                />
            </View>
        );
    }

    getSpecies(){
        const init = {
            method: 'GET',
            headers: { "Content-Type":"application/json" }
        };
        for (let i = 1; i <= 4; i++) {
            fetch("https://www.swapi.tech/api/species/?page="+i, init)
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

    
}
const styles = StyleSheet.create({
    species: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default Species;