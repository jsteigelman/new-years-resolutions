import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button, FlatList } from 'react-native'

import ResolutionItem from './components/ResolutionItem'
import ResolutionInput from './components/ResolutionInput'

export default function App() {
  const [resolutions, setResolutions] = useState([])
  const [modalVisible, setModalVisible] = useState(false)


  const addResolutionHandler = (resolution) => {
    setResolutions((currentResolutions) => [
      ...currentResolutions,
      { id: Math.random().toString(), value: resolution },
    ])
    setModalVisible(false)
  }

  const removeResolutionHandler = (resolutionId) => {
    setResolutions((currentResolutions) => {
      return currentResolutions.filter(
        (resolution) => resolution.id !== resolutionId
      )
    })
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => setModalVisible(!modalVisible)} title="Add new resolution" color="#841584" />

      <ResolutionInput onAddResolution={addResolutionHandler} visible={modalVisible} />

      <FlatList
        keyExtractor={(item, index) => item.key}
        data={resolutions}
        renderItem={(itemData) => (
          <ResolutionItem
            id={itemData.item.id}
            onDelete={removeResolutionHandler}
            title={itemData.item.value}
            // key={itemData.item.id}
          />
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
