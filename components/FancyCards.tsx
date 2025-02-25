import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1739000247558-bc6b37b84d64?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' }}
                    style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Building</Text>
                    <Text style={styles.cardLocation}>Pakistan</Text>
                    <Text style={styles.cardDesc}>Building in Pakistan</Text>
                    <Text style={styles.cardFooter}>Visited 12 Days Ago</Text>
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
        borderWidth: 5,
        padding: 8,

    },
    cardElevated: {},
    cardImage: {
        width: 130,
        height: 200,
        objectFit: 'cover',
        borderRadius: 10,
    },
    cardBody: {
        borderWidth: 4,
    },
    cardTitle: {
        color: "#fff",

    },
    cardLocation: {
        color: "#fff",
    },
    cardDesc: {
        color: "#fff",
    },
    cardFooter: {
        color: "#fff",
    }
})