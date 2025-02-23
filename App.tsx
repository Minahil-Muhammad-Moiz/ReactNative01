import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import AppPro from './components/AppPro'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppPro />
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App