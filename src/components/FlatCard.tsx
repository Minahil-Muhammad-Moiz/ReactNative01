import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <Text style={[styles.headingText, isDarkMode && styles.whiteText]}>FlatCard</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>RED</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>RED</Text>
                </View>
            </View>
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
    whiteText: {
        color: '#fff'
    },
    container: {
        padding: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    card: {
        height: 100,
        // width: '20%',
        margin: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff'
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'green',
    },
    cardThree: {
        backgroundColor: 'yellow',
    }
})