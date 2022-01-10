import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default function App() {
  const [inputResolution, setInputResolution] = useState('')
  const [resolutions, setResolutions] = useState([])

  const resolutionInputHandler = (input) => {
    setInputResolution(input)
  }

  const addResolutionHandler = () => {
    console.log('The entered resolution is: ' + inputResolution)
    setResolutions(currentResolutions => [...currentResolutions, inputResolution])
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
        <Button title='Add' onPress={addResolutionHandler} />
      </View>

      <View>
        {resolutions.map((resolutionElement) => <Text key={resolutionElement} >{resolutionElement}</Text>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
})
