import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { CurrencyByRupee } from '../constants'

type CurrencyButtonProps = PropsWithChildren<{
    name: String,
    symbol: String
}>

const CurrencyButton = (props: CurrencyButtonProps) => {
    return (
        <View>
            <Text>{props.symbol}</Text>
            <Text>{props.name}</Text>
        </View>
    )
}

export default function CurrencyConverter() {
    return (
        <View>
            <Text>CurrencyConverter</Text>
            <FlatList
                data={CurrencyByRupee}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (<CurrencyButton {...item} />)
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})