import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { CurrencyByRupee } from '../constants'

type CurrencyButtonProps = PropsWithChildren<{
    name: String,
    symbol: String
}>

const CurrencyButton = (props: CurrencyButtonProps) => {
    return (
        <View className='text-center p-4 '>
            <Text className='text-center font-bold text-2xl'>{props.symbol}</Text>
            <Text>{props.name}</Text>
        </View>
    )
}

export default function CurrencyConverter() {
    const [inputValue, setInputValue] = useState('')
    const [output, setOutput] = useState('')
    const [target, setTarget] = useState('')

    const handleConvertion = (item: Currency) => {
        if (!inputValue) return;
        setTarget(item.name)
        const convertedValue = (parseFloat(inputValue) * item.value).toFixed(4)
        setOutput(`${inputValue} PKR = ${convertedValue} ${item.symbol} ${item.name}`)
    }

    return (
        <>
            <View className='bg-gray-200 py-4 rounded-lg text-pink-500 flex items-center justify-center gap-6'>
                <Text className=' text-center font-bold text-2xl'>CurrencyConverter</Text>
                {output && <Text className='text-2xl font-extrabold'>{output}</Text>}
                <TextInput className='bg-gray-300 rounded-xl px-10 w-60 ' placeholder='Enter amount...' placeholderTextColor={'#f9fafb'} keyboardType='number-pad' value={inputValue} onChangeText={setInputValue} />
                <FlatList
                    numColumns={3}
                    data={CurrencyByRupee}
                    keyExtractor={(item) => item.name}
                    className='mx-4'
                    nestedScrollEnabled={true}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => handleConvertion(item)} className={`${target === item.name ? 'bg-pink-400 ' : 'bg-[#f472b579] '} m-2 rounded-2xl`}>
                            <CurrencyButton {...item} />
                        </Pressable>}
                />
            </View>
        </>
    )
}