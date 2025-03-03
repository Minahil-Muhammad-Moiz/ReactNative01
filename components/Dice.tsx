import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProp = PropsWithChildren<{
    imageURL: ImageSourcePropType
}>

export default function Dice({ imageURL }: DiceProp) {
    return (
        <View>
            <Image source={imageURL} style={styles.diceImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    diceImage: {
        width: 100,
        height: 100
    }
})