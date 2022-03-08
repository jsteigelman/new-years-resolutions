import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native'
import ResolutionItem from './ResolutionItem'

const ResolutionInput = (props) => {
  const [inputResolution, setInputResolution] = useState('')

  const resolutionInputHandler = (input) => {
    setInputResolution(input)
  }

  const newResolutionHandler = () => {
    props.onAddResolution(inputResolution)
    setInputResolution('')
  }

  const cancelAndClearHandler = () => {
    props.onCancel()
    setInputResolution('')
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your resolution'
          style={styles.textInput}
          onChangeText={resolutionInputHandler}
          value={inputResolution}
        />
        <View style={styles.buttonRow}>
          <View style={styles.cancelButton}>
            <Button
              title='Cancel'
              onPress={cancelAndClearHandler}
            />
          </View>
          <View style={styles.addButton}>
            <Button
              title='Add'
              onPress={newResolutionHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white'
  },
  cancelButton: {
    backgroundColor: 'red',
    width: '40%'
  },
  addButton: {
    backgroundColor: 'blue',
    width: '40%'
  }
})

export default ResolutionInput
