import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'

const SettingsScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.button} onPress={() => dispatch(logout())}>
      <Text style={styles.buttonText}>Logout</Text>
     </TouchableOpacity>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})