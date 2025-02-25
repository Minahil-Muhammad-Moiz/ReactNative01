import { View, Text, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import AppPro from './components/AppPro'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'

const App = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCards/>
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