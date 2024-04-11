import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaComidaTipica from './Screens/ListaComidaTipica';
import ListaSopas from './Screens/ListaSopas';
import ListaCarnesMariscos from './Screens/ListaCarnesMariscos';
import DetalleComida from './Screens/DetalleComida';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ListaComidaTipicaStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ListaComidaTipica" component={ListaComidaTipica} />
    <Stack.Screen name="DetalleComida" component={DetalleComida} />
  </Stack.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="ComidaTipica" component={ListaComidaTipicaStack} />
                <Tab.Screen name="Sopas" component={ListaSopas} />
                <Tab.Screen name="CarneMariscos" component={ListaCarnesMariscos} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;


