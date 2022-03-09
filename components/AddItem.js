import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


const AddItem = (props) => {

    const openModal = () => {
        props.onAddNewResolution()
    }
      
    return (
        <LinearGradient
        style={styles.gradient}
        colors={[
          'rgba(62,128,253,1)',
          // 'rgba(236,166,230,1)',
          // 'rgba(239,236,203,1)',
          // 'rgba(168,217,233,1)',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity
          style={styles.addResolutionButton}
        onPress={openModal}
        >
          <Text style={styles.gradientText}>Add Resolution</Text>
        </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 16,

    },
      gradientText: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
        paddingHorizontal: 20,
        textAlign: 'center',
      },
})

export default AddItem