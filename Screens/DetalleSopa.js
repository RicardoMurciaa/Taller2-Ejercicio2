import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const DetalleSopa = ({ route, navigation }) => {
    const { sopa } = route.params;
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Detalles de la Sopa</Text>
            <View style={styles.detailsContainer}>
                <Image source={{ uri: sopa.foto }} style={styles.sopaImage} />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.info}>{sopa.nombre}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Descripción:</Text>
                    <Text style={styles.info}>{sopa.descripcion}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Ingredientes:</Text>
                    <Text style={styles.info}>{sopa.ingredientes.join(', ')}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Precio:</Text>
                    <Text style={styles.info}>${sopa.precio.toFixed(2)}</Text>
                </View>
            </View>
            <Button
                title="Volver"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailsContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 20,
        width: '80%',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    sopaImage: {
        width: '100%',
        aspectRatio: 2,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});

export default DetalleSopa;

