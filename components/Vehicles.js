import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
              <Text style={{fontSize: 20}}>{title}</Text>
            </View>
          );       

        return(
            <View style={styles.vehicles}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
                    data={this.state.vehicles}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.name}/>)}
                />
            </View>
        );
    }

    getVehicles(){
        const init = {
            method: 'GET',
            headers: { "Content-Type":"application/json" }
        };
        for (let i = 1; i <= 4; i++) {
            fetch("https://www.swapi.tech/api/vehicles/?page="+i, init)
            .then((res) => { 
                res.json()
                .then((data) => {
                    var res = data.results
                    var vehicles = this.state.vehicles;
                    res.forEach(element => {
                        vehicles.push(element);
                    });
                    this.setState({ vehicles : vehicles });
                });
            }).catch(error => console.error(error));
        }
    }

    
}
const styles = StyleSheet.create({
    vehicles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default Vehicles;