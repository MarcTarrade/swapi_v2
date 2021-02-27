import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <View style={styles.home}>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("Starships")}>
                <Text>Starships</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("People")}>
                <Text>People</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("Planets")}>
                <Text>Planets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("Films")}>
                <Text>Films</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("Vehicles")}>
                <Text>Vehicles</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("Species")}>
                <Text>Species</Text>
            </TouchableOpacity>
        </View>);
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#000000',
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        padding: 10,
        width: 200,
        backgroundColor: '#3498DB',
    },
});

export default Home;