import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//#region Composants
import Home from './components/Home.js';
import Starships from './components/Starships.js';
import Species from './components/Species.js';
import People from './components/People.js';
import Planets from './components/Planets.js';
import Vehicles from './components/Vehicles.js';
import Films from './components/Films.js';
//#endregion

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Starships" component={Starships}/>
        <Stack.Screen name="Species" component={Species}/>
        <Stack.Screen name="People" component={People}/>
        <Stack.Screen name="Planets" component={Planets}/>
        <Stack.Screen name="Vehicles" component={Vehicles}/>
        <Stack.Screen name="Films" component={Films}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}