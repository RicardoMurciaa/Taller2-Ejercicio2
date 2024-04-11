// ListaSopas.js

import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';

const ListaSopas = ({ navigation }) => {
    const [sopas, setSopas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchSopas();
    }, []);

    const fetchSopas = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/21ef7317-b99a-4f89-9646-89d3d2541cb0');
            const data = await response.json();
            setSopas(data.sopas);
        } catch (error) {
            console.error('Error fetching sopas:', error);
        }
    };

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    const filteredSopas = sopas.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredientes.some(ingrediente =>
            ingrediente.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.sopaCard} onPress={() =>
            navigation.navigate('DetalleSopa', { sopa: item })}>
            <View style={styles.sopaInfo}>
                <Image source={{ uri: item.foto }} style={styles.sopaImage} />
                <Text style={styles.sopaName}>{item.nombre}</Text>
                <Text style={styles.sopaDescription}>{item.descripcion.substring(0, 50)}...</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                onChangeText={handleSearch}
                value={searchTerm}
                placeholder="Buscar sopa por nombre"
            />
            <FlatList
                data={filteredSopas}
                renderItem={renderItem}
                keyExtractor={(item) => item.nombre}
                contentContainerStyle={styles.sopaList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        padding: 10,
    },
    sopaList: {
        padding: 10,
    },
    sopaCard: {
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    sopaInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    sopaImage: {
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
    },
    sopaName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default ListaSopas;

