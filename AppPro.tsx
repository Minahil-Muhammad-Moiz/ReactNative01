import React, { JSX } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, useColorScheme, View, } from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'light';

    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.darkMode : styles.lightMode}>HELLO WORLD!!</Text>
                <Text>HELLO WORLD!!</Text>
                <Text>HELLO WORLD!!</Text>
                <Text>HELLO WORLD!!</Text>
                <Text>HELLO WORLD!!</Text>
            </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkMode: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        fontStyle: 'italic',
    },
    lightMode: {
        backgroundColor: '#FFFFFF',
        color: '#000000'
    }
})

export default AppPro;