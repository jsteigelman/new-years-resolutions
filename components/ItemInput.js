import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native'

const ItemInput = (props) => {
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
    <Modal visible={props.visible} animationType='slide' style={styles.modalContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your resolution'
          style={styles.textInput}
          onChangeText={resolutionInputHandler}
          value={inputResolution}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={cancelAndClearHandler}
            style={styles.cancelButton}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={newResolutionHandler}
            style={styles.addButton}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#DBE3F9',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 24,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: 'red',
    width: '40%',
  },
  addButton: {
    backgroundColor: 'blue',
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    padding: 12,
    textAlign: 'center',
  }
})

export default ItemInput
