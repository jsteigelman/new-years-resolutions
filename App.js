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

export default function App() {
  const [inputResolution, setInputResolution] = useState('')
  const [resolutions, setResolutions] = useState([])

  const resolutionInputHandler = (input) => {
    setInputResolution(input)
  }

  const addResolutionHandler = () => {
    console.log('The entered resolution is: ' + inputResolution)
    setResolutions((currentResolutions) => [
      ...currentResolutions,
      { key: Math.random().toString(), value: inputResolution},
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your resolution'
          style={styles.textInput}
          onChangeText={resolutionInputHandler}
          value={inputResolution}
        />
        <Button
          buttonStyle={styles.addResolutionButton}
          title='Add'
          onPress={addResolutionHandler}
        />
      </View>

      <FlatList
        data={resolutions}
        renderItem={(itemData) => (
          <View style={styles.resolutionListItem}>
            <Text>{itemData.item.value}</Text>
          </View>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  resolutionListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
  },
  addResolutionButton: {
    // color: 'red',
    // backgroundColor: 'red',
    // borderColor: 'red',
    // borderWidth: 1,
  },
})
