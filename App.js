import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native'

import Item from './components/Item'
import ItemInput from './components/ItemInput'
import AddItem from './components/AddItem'

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

  const modalHandler = () => {
    setModalVisible(!modalVisible)
  }

  const cancelModalHandler = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitle}>MyResolutions</Text>
      </View>

      <AddItem 
        visible={modalVisible}
        onAddNewResolution={modalHandler}
      />

      <ItemInput
        onAddResolution={addResolutionHandler}
        visible={modalVisible}
        onCancel={cancelModalHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.key}
        data={resolutions}
        renderItem={(itemData) => (
          <Item
            id={itemData.item.id}
            onDelete={removeResolutionHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBE3F9',
    paddingTop: 120,
    // paddingHorizontal: 20,
    height: '100%',
  },
  appTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: '#2C3550',
    paddingHorizontal: 20,
  },
  appTitleContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 120,
  },
})
