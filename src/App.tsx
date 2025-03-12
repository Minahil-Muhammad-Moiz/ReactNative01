import { View, Text, SafeAreaView, ScrollView, StyleSheet, useColorScheme, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import FlatCard from './components/FlatCard'
import AppPro from './components/AppPro'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import PasswordGenerator from './components/PasswordGenerator'
import BgChanger from './components/BgChanger'
import DiceProject from './components/DiceProject'
import CurrencyConverter from './components/CurrencyConverter'
import '../global.css'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaView style={[styles.container]} >
      <StatusBar />
      <ScrollView>
        {/* <CurrencyConverter /> */}
        <DiceProject />
        <BgChanger />
        <PasswordGenerator />
        <ElevatedCards />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
})

export default App