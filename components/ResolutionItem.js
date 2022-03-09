import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ResolutionItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.65} onPress={() => props.onDelete(props.id)}>
      <View style={styles.resolutionListItem} on>
        <Text style={styles.resolutionItemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  resolutionListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 8,
  },
  resolutionItemText: {
    padding: 12,
    fontSize: 24,
  },

})

export default ResolutionItem
