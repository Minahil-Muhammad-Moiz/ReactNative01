import React, { JSX } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, useColorScheme, View, } from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.darkMode : styles.lightMode}>HELLO WORLD!!</Text>
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
        color: '#FFFFFF',
        fontStyle: 'italic',
    },
    lightMode: {
        color: '#000000'
    }
})

export default AppPro;