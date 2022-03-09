import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


const AddResolutionButton = (props) => {

    const openModal = () => {
        props.onAddNewResolution()
    }
      
    return (
        <LinearGradient
        style={styles.gradient}
        colors={[
          "#ECA6E6",
          "#EFECCB",
          "#A8D9E9",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity
          style={styles.addResolutionButton}
        //   onPress={() => setModalVisible(!modalVisible)}
        onPress={openModal}
        >
          <Text style={styles.addResolutionButtonText}>Add Resolution</Text>
        </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        marginHorizontal: 20,
        borderRadius: 8,

    },
    addResolutionButton: {
        // backgroundColor: 'blue',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 20,
      },
      addResolutionButtonText: {
        fontSize: 34,
        fontWeight: '700',
        color: 'white',
        paddingHorizontal: 20,
        textAlign: 'center',
      },
})

export default AddResolutionButton