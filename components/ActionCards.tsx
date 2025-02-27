import { Image, Linking, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function moveToArticle(webLink: string) {
        Linking.openURL(webLink)
    }
    return (
        <View>
            <View style={styles.separator}></View>
            <View style={[styles.card]}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Sunsetting Create React App</Text>
                </View>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={styles.image} />
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText} numberOfLines={5}>
                        Today, we’re deprecating Create React App for new apps, and encouraging existing apps to migrate to a framework, or to migrate to a build tool like Vite, Parcel, or RSBuild.
                        We’re also providing docs for when a framework isn’t a good fit for your project, you want to build your own framework, or you just want to learn how React works by building a React app from scratch.
                    </Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => moveToArticle('https://react.dev/blog/2025/02/14/sunsetting-create-react-app')}>
                        <Text style={styles.footerLink}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => moveToArticle('https://react.dev/blog/2025/02/14/sunsetting-create-react-app')}>
                        <Text style={styles.footerLink}>Follow </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        borderWidth: 1,
        margin: 20,
        borderColor: '#fff',
        borderCurve: 'circular',
        backgroundColor: '#fff'
    },
    card: {
    },
    header: {
        paddingBottom: 20,
        // borderWidth: 4,
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    image: {
        width: '100%',
        height: 200,
        objectFit: 'cover',
        borderRadius: 10,
    },
    bodyContainer: {
        paddingVertical: 4,
    },
    bodyText: {
        color: '#fff',
        letterSpacing: 1.2,
        textAlign: 'left',
        fontSize: 15,
    },
    footer: {
        display: 'flex',
        // alignItems: 'flex-end',
        // borderWidth: 2,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,
    },
    footerLink: {
        color: '#fff',
        width: 'auto',
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 18,
        marginVertical: 10,
        backgroundColor: 'grey',
        maxWidth: 150,
        textAlign: 'center',
        borderRadius: 5,
    }
})