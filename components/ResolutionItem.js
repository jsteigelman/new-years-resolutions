import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const ResolutionItem = (props) => {
  return (
    <View style={styles.resolutionListItem}>
      <Text>{props.title}</Text>
    </View>
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
