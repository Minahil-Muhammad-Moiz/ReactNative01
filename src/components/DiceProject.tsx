import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { JSX, PropsWithChildren, useState } from 'react'
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProp = PropsWithChildren<{
    imageURL: ImageSourcePropType,
}>
// Optional configuration
// const options = {
//     enableVibrateFallback: true,
//     ignoreAndroidSystemSettings: false,
// };

const Dice = ({ imageURL }: DiceProp): JSX.Element => {

    return (
        <View >
            <Image source={imageURL} style={styles.diceImage} />
        </View>
    )
}

export default function DiceProject() {
    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

    const generateDiceNum = () => {
        const number = Math.floor(Math.random() * 6) + 1

        switch (number) {
            case 2:
                setDiceImage(DiceTwo)
                break;
            case 3:
                setDiceImage(DiceThree)
                break;
            case 4:
                setDiceImage(DiceFour)
                break;
            case 5:
                setDiceImage(DiceFive)
                break;
            case 6:
                setDiceImage(DiceSix)
                break;
            default:
                setDiceImage(DiceOne)
                break;
        }

        // ReactNativeHapticFeedback.trigger("impactLight", options);
    }
    return (
        <View style={styles.diceContainer}>
            <Pressable onPress={generateDiceNum}>
                <Text style={styles.btnText}>ROLL THE DICE</Text>
            </Pressable>
            <Dice imageURL={diceImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    diceContainer: {
        // width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        gap: 20
    },
    diceImage: {
        width: 150,
        height: 150,
    },
    btnText: {
        color: '#fff',
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        elevation: 4,
        shadowOffset: {
            width: 20,
            height: 20
        },
        shadowColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})