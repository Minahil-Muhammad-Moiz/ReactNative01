import { StyleSheet, Text, useColorScheme, View, Animated, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const GEMINI_API = "AIzaSyBO9GuCw2C-R5gr12D3pBfWLt3CVirdqZo";  // Consider moving API key to environment variables

export default function Chatbot() {
    const isDark = useColorScheme() === 'dark';

    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState(['abc'])

    // Define renderItem function
    const renderItem = ({ item }) => (
        <View>
            <Text className={`${isDark ? 'text-white' : ''}`}>{item}</Text> {/* Wrap text inside <Text> */}
        </View>
    );

    return (
        <SafeAreaView className='p-10 h-full w-full bg-pink-500 flex'>
            {messages.length === 0 && (
                <Animated.View className={`self-center`}>
                    <Text className={`${isDark ? 'text-white' : ''} font-bold text-3xl`}>
                        Chatbot
                    </Text>
                </Animated.View>
            )}
            <FlatList
                renderItem={renderItem}
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                className={`flex-grow justify-end pb-10`}
            />
        </SafeAreaView>
    )
}
