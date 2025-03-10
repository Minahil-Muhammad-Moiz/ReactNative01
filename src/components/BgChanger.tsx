import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BgChanger() {
  const [bgColor, setBgColor] = useState('#ffffff')

  const generateColor = () => {
    const hexNum = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexNum[Math.floor(Math.random() * 16)]
    }
    setBgColor(color)
  }
  return (
    <View style={[styles.container4, { backgroundColor: bgColor }]} >
      <TouchableOpacity onPress={generateColor}>
        <Text style={styles.container4btn}>Change BgColor</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container4: {
    height: 100,
    // borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  container4btn: {
    color: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#000000'
  },
})