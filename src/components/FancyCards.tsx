import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <ScrollView>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1740007124901-6644ebaa3c08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' }}
                        style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Mountains</Text>
                        <Text style={styles.cardLocation}>Pakistan</Text>
                        <Text style={styles.cardDesc}>A beautiful and scenatic view of mountian ranges.</Text>
                        <Text style={styles.cardFooter}>Visited 12 Days Ago..</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1735325885356-7f7be4da24fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D' }}
                        style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Mountains</Text>
                        <Text style={styles.cardLocation}>Pakistan</Text>
                        <Text style={styles.cardDesc}>Northen areas in Pakistan.</Text>
                        <Text style={styles.cardFooter}>Visited 12 Days Ago..</Text>
                    </View>
                </View>
            </ScrollView>
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
        // borderWidth: 3,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    cardElevated: {},
    cardImage: {
        height: 200,
        objectFit: 'cover',
        width: '100%',
    },
    cardBody: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    cardLocation: {
        fontSize: 18,
    },
    cardDesc: {
        fontSize: 16,
        marginTop: 10,
    },
    cardFooter: {
        fontSize: 12,
        color: 'grey',
        fontStyle: 'italic',
        marginTop: 15,
        textAlign: 'right',
    }
})