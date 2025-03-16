import { StyleSheet, Text, useColorScheme, View, Animated, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Chatbot() {
    const isDark = useColorScheme() === 'dark';

    const [msg, setMsg] = useState('');
    const [messages, setMessages] = useState([]);

    // Define renderItem function
    const renderItem = ({ item }) => (
        <View style={{
            padding: 10,
            maxWidth: '80%',
            borderRadius: 10,
            marginBottom: 10,
            backgroundColor: 'yellow',
            borderColor: 'green',
            borderWidth: 2,
            shadowColor: 'white',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2
        }}>
            <Text style={{ fontSize: 18, color: isDark ? 'white' : 'black' }}>{item?.text}</Text>
        </View>
    );

    const handleButtonClick = async () => {
        if (!msg.trim()) return;

        const userMessage = { text: msg, sender: 'user' };
        setMessages((prevMsg) => [userMessage, ...prevMsg]);
        setMsg('');

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [{ text: msg }]
                            }
                        ]
                    })
                }
            );

            const data = await response.json();

            let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't understand that.";
            reply = reply.replace(/\*/g, ""); // ✅ Fixed modification of `const`

            const botMessage = { text: reply, sender: 'bot' };
            setMessages((prevMsg) => [botMessage, ...prevMsg]);

        } catch (err) {
            console.error("API Error:", err);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 10, }}>
            {messages.length === 0 && (
                <Animated.View style={{ alignSelf: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: isDark ? 'white' : 'black' }}>
                        Chatbot
                    </Text>
                </Animated.View>
            )}
            <FlatList
                renderItem={renderItem}
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                style={{ flexGrow: 1, paddingBottom: 10 }}
            />
        </SafeAreaView>
    );
}
