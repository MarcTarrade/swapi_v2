import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
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
              <Text style={{fontSize: 20, color : "white"}}>{title}</Text>
            </View>
          );

        return(
		<ImageBackground source={image} style={styles.image}>
            <View style={styles.films}>
                <FlatList
                    contentContainerStyle={{display: 'flex', justifyContent:'space-evenly'}}
                    data={this.state.films}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<Item title={item.properties.title}/>)}
                />
            </View>
		</ImageBackground>
        );
    }

    getFilms(){
        const init = {
            method:'GET',
            headers:{"Content-Type":"application/json"}};
        fetch('https://www.swapi.tech/api/films/', init)
        .then((res) => { 
            res.json()
            .then((data) => {
                var res = data.result
                console.log(res)
                this.setState({ films : res });
            });
        }).catch(error => console.error(error));
    }

    
}
const image = require('./../assets/background.jpg');
const styles = StyleSheet.create({
    films: {
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

export default Films;