import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalleComida = ({ route }) => {
    const { comida } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: comida.foto }} style={styles.comidaImage} />
            <View style={styles.comidaInfo}>
                <Text style={styles.comidaName}>{comida.nombre}</Text>
                <Text style={styles.region}>{comida.region}</Text>
                <Text style={styles.descripcionComida}>{comida.descripcion}</Text>
                <Text style={styles.sectionTitle}>Ingredientes:</Text>
                <Text style={styles.infoText}>{comida.ingredientes}</Text>
                <Text style={styles.sectionTitle}>Precio promedio:</Text>
                <Text style={styles.infoText}>${comida.precio}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    comidaImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    comidaInfo: {
        padding: 20,
    },
    comidaName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    region: {
        fontSize: 15,
        color: '#888',
        marginBottom: 10,
    },
    descripcionComida: {
        fontSize: 14,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    infoText: {
        fontSize: 14,
        marginBottom: 10,
        color: '#555',
    },
});

export default DetalleComida;

