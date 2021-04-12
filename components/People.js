import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class People extends React.Component{
    constructor(props){
        super(props);
        this.state = { people: [] };
    }

    componentDidMount(){
        this.getPeople();
    }

    render(){
        const Item = ({ title }) => (
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20}}>{title}</Text>
            </View>
          );       

        return(
            <View style={styles.people}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent: 'space-evenly'}}
                    data={this.state.people}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.name}/>)}
                />
            </View>
        );
    }

    getPeople(){
        const init = {
            method: 'GET',
            headers: { "Content-Type":"application/json" }
        };
        for (let i = 1; i <= 9; i++) {
            fetch("https://www.swapi.tech/api/people/?page="+i, init)
            .then((res) => { 
                res.json()
                .then((data) => {
                    var res = data.results
                    var people = this.state.people;
                    res.forEach(element => {
                        people.push(element);
                    });
                    this.setState({ people : people });
                });
            }).catch(error => console.error(error));
        }
    }

    
}
const styles = StyleSheet.create({
    people: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default People;