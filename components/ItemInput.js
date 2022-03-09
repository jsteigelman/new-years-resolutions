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
    height: '50%',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F7FF',

  },
  textInput: {
    width: '80%',
    borderColor: '#CCCEDD',
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    fontSize: 28,
    borderRadius: 8,
    backgroundColor: '#fff',
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
    backgroundColor: '#D9E7FF',
    width: '45%',
    borderRadius: 8,

  },
  addButton: {
    backgroundColor: '#3ECCFE',
    width: '45%',
    borderRadius: 8,

  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500',
    padding: 12,
    textAlign: 'center',
  }
})

export default ItemInput
