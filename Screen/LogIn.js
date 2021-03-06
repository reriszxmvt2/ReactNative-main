import React from 'react'
import { View, Image, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { StackActions } from '@react-navigation/native'

export default function LogIn ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text>NETHUB</Text> */}
      </View>

      <View style={styles.body}>
        <View style={styles.imgbox}>
          <Image
            source={require('../assets/movies.jpg')}
            style={styles.Images}
          />
        </View>

        <TextInput style={styles.input} value={Text} placeholder='Username' />
        <TextInput style={styles.input} value={Text} placeholder='Password' />

        <Button
          title='Log in'
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            borderRadius: 5,
            top:10,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 50,
            height: 60,
            width: 200,
            marginVertical: 10
          }}
          onPress={() =>
            navigation.dispatch(StackActions.push('Tabs', { user: ' ' }))
          }
        />
      </View>

      <View style={styles.footer}>
        {/* <Text>footer</Text> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'

  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightblue'
  },
  body: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'steelblue'
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  Images: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 75
  },
  imgbox:{
      bottom: 35
  },
})
