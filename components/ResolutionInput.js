import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import ResolutionItem from './ResolutionItem'

const ResolutionInput = (props) => {
  const [inputResolution, setInputResolution] = useState('')

  const resolutionInputHandler = (input) => {
    setInputResolution(input)
  }

  return (
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
        onPress={props.onAddResolution.bind(this, inputResolution)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
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

export default ResolutionInput
