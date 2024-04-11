import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListaComidaTipica from './ListaComidaTipica';
import ListaSopas from './ListaSopas';
import ListaCarnesMariscos from './ListaCarnesMariscos';

const Tab = createMaterialTopTabNavigator();

const ComidaTipica = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Comida típica" component={ListaComidaTipica} />
            <Tab.Screen name="Sopas" component={ListaSopas} />
            <Tab.Screen name="Carnes/Mariscos" component={ListaCarnesMariscos} />
        </Tab.Navigator>
    );
};

export default ComidaTipica;
