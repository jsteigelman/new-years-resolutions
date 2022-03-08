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
      animationType="slide"
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.')
      //   setModalVisible(!modalVisible)
      // }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your resolution'
          style={styles.textInput}
          onChangeText={resolutionInputHandler}
          value={inputResolution}
        />
        <Button 
        title="Cancel"
        color="gray"
        onPress={cancelAndClearHandler}
        />
        <Button
          buttonStyle={styles.addResolutionButton}
          title="Add Resolution"
          onPress={newResolutionHandler}
        />
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
    marginBottom: 10
  },
})

export default ResolutionInput
