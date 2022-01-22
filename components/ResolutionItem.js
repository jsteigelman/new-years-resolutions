import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const ResolutionItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.65} onPress={props.onDelete}>
    <View style={styles.resolutionListItem} on>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    resolutionListItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 1,
      },
})

export default ResolutionItem
