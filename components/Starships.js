import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
              <Text style={{fontSize: 20}}>{title}</Text>
            </View>
          );

        return(
            <View style={styles.starships}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
                    data={this.state.starships}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.name}/>)}
                />
            </View>
        );
    }

    getStarships(){
        const init = {
            method: 'GET',
            headers: { "Content-Type":"application/json" }
        };
        for (let i = 1; i <= 4; i++) {
            fetch("https://www.swapi.tech/api/starships/?page="+i, init)
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
}
const styles = StyleSheet.create({
    starships: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default Starships;