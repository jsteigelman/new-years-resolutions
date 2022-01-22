import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from 'react-native'

import ResolutionItem from './components/ResolutionItem'
import ResolutionInput from './components/ResolutionInput'

export default function App() {
  const [resolutions, setResolutions] = useState([])

  const addResolutionHandler = (resolution) => {
    setResolutions((currentResolutions) => [
      ...currentResolutions,
      { key: Math.random().toString(), value: resolution },
    ])
  }

  return (
    <View style={styles.container}>
      <ResolutionInput onAddResolution={addResolutionHandler} />

      <FlatList
        keyExtractor={(item, index) => item.key}
        data={resolutions}
        renderItem={(itemData) => (
          <ResolutionItem title={itemData.item.value} onDelete={() => console.log('Does this work?')} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 120,
    paddingHorizontal: 20,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  addResolutionButton: {
    // color: 'red',
    // backgroundColor: 'red',
    // borderColor: 'red',
    // borderWidth: 1,
  },
})
