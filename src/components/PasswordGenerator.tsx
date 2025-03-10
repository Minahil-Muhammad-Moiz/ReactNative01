import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = Yup.object().shape({
    passLength: Yup.number()
        .min(4, 'Password must be minimum of length 4')
        .max(8, 'Password must be maximum of length 8')
        .required('Password required length.')
})
export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [lowercase, setLowercase] = useState(false)
    const [uppercase, setUppercase] = useState(false)
    const [number, setNumber] = useState(false)
    const [symbol, setSymbol] = useState(false)


    const generateString = (passLength: number) => {
        let charList = ''

        const Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const Lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const Symbols = '!@#$%^&*';
        const numbers = '1234567890';

        lowercase && (charList += Lowercase);
        uppercase && (charList += Uppercase);
        number && (charList += numbers);
        symbol && (charList += Symbols);

        let result = ''
        for (let i = 0; i < passLength; i++) {
            const charIndex = Math.round(Math.random() * charList.length)
            result += charList.charAt(charIndex);
        }

        setPassword(result);
        setIsPasswordGenerated(true)
    }

    const resetPassword = () => {
        setPassword('')
        setIsPasswordGenerated(false)
        setLowercase(false)
        setUppercase(false)
        setNumber(false)
        setSymbol(false)
    }

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.headingText}>PASSWORD GENERATOR</Text>
                    <Formik
                        initialValues={{ passLength: '' }}
                        validationSchema={passwordSchema}
                        onSubmit={values => {
                            generateString(+values.passLength)
                        }}
                    >
                        {({ values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit,
                            handleReset
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.labelText}>Password Length</Text>
                                        {touched.passLength && errors.passLength &&
                                            <Text style={styles.errorMsg}>
                                                {errors.passLength}
                                            </Text>}
                                    </View>
                                    <TextInput
                                        style={styles.inputStyle}
                                        value={values.passLength}
                                        onChangeText={handleChange('passLength')}
                                        placeholder='Ex. 8'
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.labelText}>Include LowerCase</Text>
                                    <BouncyCheckbox
                                        useBuiltInState={false}
                                        isChecked={lowercase}
                                        onPress={() => setLowercase(!lowercase)}
                                        fillColor='#29AB87' />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.labelText}>Include UpperCase</Text>
                                    <BouncyCheckbox
                                        useBuiltInState={false}
                                        isChecked={uppercase}
                                        onPress={() => setUppercase(!uppercase)}
                                        fillColor='#29AB87' />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.labelText}>Include Symbols</Text>
                                    <BouncyCheckbox
                                        useBuiltInState={false}
                                        isChecked={symbol}
                                        onPress={() => setSymbol(!symbol)}
                                        fillColor='#29AB87' />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.labelText}>Include Numbers</Text>
                                    <BouncyCheckbox
                                        useBuiltInState={false}
                                        isChecked={number}
                                        onPress={() => setNumber(!number)}
                                        fillColor='#29AB87' />
                                </View>

                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        disabled={!isValid}
                                        style={styles.primaryBtn}
                                        onPress={() => { handleSubmit(); }}>
                                        <Text style={styles.primaryBtnText}>Generate Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.secBtn}
                                        onPress={() => {
                                            handleReset();
                                            resetPassword();
                                        }}
                                    >
                                        <Text style={styles.secBtnText}>Reset</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
                {isPasswordGenerated ? (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultLabel}>RESULTS:</Text>
                        <Text style={styles.intructionText}>Long press to copy</Text>
                        <Text selectable={true} style={styles.passwordText}>{password}</Text>
                    </View>
                ) : null}
            </SafeAreaView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        // borderWidth: 2,
        paddingVertical: 20,
    },
    formContainer: {
        // borderWidth: 2,
    },
    headingText: {
        // borderWidth: 2,
        fontSize: 20,
        color: '#fff',
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        // alignItems: 'baseline',
    },
    inputColumn: {
        // borderWidth: 2,
    },
    labelText: {
        color: '#fff',
        fontSize: 15,
    },
    errorMsg: {
        color: 'red',
    },
    inputStyle: {
        borderWidth: 2,
        paddingHorizontal: 20,
        borderRadius: 10,
        color: '#fff'
    },
    formActions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    primaryBtn: {
        backgroundColor: 'skyblue',
        padding: 10,
        fontSize: 20,
        borderRadius: 10
    },
    primaryBtnText: {},
    secBtn: {
        backgroundColor: 'lightyellow',
        padding: 10,
        fontSize: 20,
        borderRadius: 10
    },
    secBtnText: {},
    resultContainer: {
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        padding: 10,
    },
    resultLabel: {
        fontWeight: 'bold'
    },
    intructionText: {},
    passwordText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'black'
    }
})