import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1740007124901-6644ebaa3c08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' }}
                    style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Mountains</Text>
                    <Text style={styles.cardLocation}>Pakistan</Text>
                    <Text style={styles.cardDesc}>Northen areas in Pakistan.</Text>
                    <Text style={styles.cardFooter}>Visited 12 Days Ago..</Text>
                </View>
            </View>
            {/* <Image source={{ uri: 'https://images.unsplash.com/photo-1740007124901-6644ebaa3c08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' }}
                style={styles.cardImage} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        // paddingHorizontal: 20,
    },
    card: {
        borderWidth: 3,
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardElevated: {},
    cardImage: {
        height: 200,
        objectFit: 'cover',
        width: '100%',
    },
    cardBody: {
        backgroundColor: '#fff',
        padding: 10,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    cardLocation: {
        fontSize: 19,
    },
    cardDesc: {
        fontSize: 16,
    },
    cardFooter: {
        fontSize: 12,
        color: 'grey',
        fontStyle: 'italic',
        marginTop: 20,
        textAlign: 'right',
    }
})