import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ListaCarnesMariscos = ({ navigation }) => {
    const [carnesMariscos, setCarnesMariscos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCarnesMariscos();
    }, []);

    const fetchCarnesMariscos = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/21ef7317-b99a-4f89-9646-89d3d2541cb0');
            const data = await response.json();
            setCarnesMariscos(data.carnes_mariscos);
        } catch (error) {
            console.error('Error fetching carnes y mariscos:', error);
        }
    };

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    const filteredCarnesMariscos = carnesMariscos.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredientes.some(ingrediente =>
            ingrediente.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.carnesMariscosCard} onPress={() =>
            navigation.navigate('DetalleCarneMarisco', { carneMarisco: item })}>
            <View style={styles.carnesMariscosInfo}>
                <Image source={{ uri: item.foto }} style={styles.carnesMariscosImage} />
                <Text style={styles.carnesMariscosName}>{item.nombre}</Text>
                <Text style={styles.descripcionComida}>{item.descripcion.substring(0, 50)}...</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                onChangeText={handleSearch}
                value={searchTerm}
                placeholder="Buscar carne o marisco por nombre"
            />
            <FlatList
                data={filteredCarnesMariscos}
                renderItem={renderItem}
                keyExtractor={(item) => item.nombre}
                contentContainerStyle={styles.carnesMariscosList}
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
    carnesMariscosList: {
        padding: 10,
    },
    carnesMariscosCard: {
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    carnesMariscosInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    carnesMariscosImage: {
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
    },
    carnesMariscosName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default ListaCarnesMariscos;

