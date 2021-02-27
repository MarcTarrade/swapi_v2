import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Films extends React.Component{
    constructor(props){
        super(props);
        this.state = { films: [] };
    }

    componentDidMount(){
        this.getFilms()
    }

    render(){
        const Item = ({ title }) => (
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20}}>{title}</Text>
            </View>
          );

        return(
            <View style={styles.films}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent:'space-evenly'}}
                    data={this.state.films}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.title}/>)}
                />
            </View>
        );
    }

    getFilms(){
        const init = {
            method:'GET',
            headers:{"Content-Type":"application/json"}};
        fetch('https://swapi.dev/api/films/', init)
        .then((res) => { 
            res.json()
            .then((data) => {
                var res = data.results
                this.setState({ films : res });
            });
        }).catch(error => console.error(error));
    }

    
}
const styles = StyleSheet.create({
    films: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Films;