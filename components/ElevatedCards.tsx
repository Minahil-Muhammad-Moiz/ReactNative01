import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEle]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
          <Text>🙌...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    // paddingHorizontal: 20,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    margin: 4,
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    color: '#ffffff',
    borderRadius: 10
  },
  cardEle: {
    backgroundColor: 'grey',
    elevation: 4,
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowColor: '#fff',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
})