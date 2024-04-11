import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ListaComidaTipica = ({ navigation }) => {
    const [comidaTipica, setComidaTipica] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchComidaTipica();
    }, []);

    const fetchComidaTipica = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/21ef7317-b99a-4f89-9646-89d3d2541cb0');
            const data = await response.json();
            setComidaTipica(data.comida_tipica);
        } catch (error) {
            console.error('Error fetching comida tipica:', error);
        }
    };

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    const filteredComidaTipica = comidaTipica.filter(comida =>
        comida.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredientes.some(ingrediente =>
            ingrediente.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.comidaCard} onPress={() =>
            navigation.navigate('DetalleComida', { comida: item })}>
            <View style={styles.comidaInfo}>
                <Image source={{ uri: item.foto }} style={styles.comidaImage} />
                    <Text style={styles.comidaName}>{item.nombre}</Text>
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
                placeholder="Buscar comida típica por nombre"
            />
            <FlatList
                data={filteredComidaTipica}
                renderItem={renderItem}
                keyExtractor={(item) => item.nombre}
                contentContainerStyle={styles.comidaList}
                numColumns={2}
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
    comidaList: {
        padding: 10,
    },
    comidaCard: {
        margin: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    comidaInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    comidaImage: {
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
    },
    comidaName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    foodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    foodImage: {
        width: windowWidth / 3,
        height: windowWidth / 3,
        resizeMode: 'cover',
    },
    foodInfo: {
        flex: 1,
        padding: 10,
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ListaComidaTipica;
