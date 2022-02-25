import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import Styles from './Style.js'

function Home () {
  const image = require('../assets/movies.jpg')
  const item = [
    'Home Sweet Home',
    'Our belove of summer',
    'Bad and Crazy',
    'ตำรารักทะลุจอ',
    'Moonshine',
    'Harry Potter',
    'Ghost Docter',
    'Reply1988',
    'Sissypmus',
    'Start-Up'
  ]

  return (
    <View style={style.container}>
      <ScrollView style={style.ScrollView}>
        <View style={Styles.List}>
          {item.map((item, i) => {
            return (
              <View key={i} style={Styles.item}>
                <Image
                  key={i}
                  source={image}
                  item={item}
                  style={{ width: 120, height: 165 }}
                ></Image>
                <Text>{item}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
export default Home

const style = StyleSheet.create({
  ScrollView: {
    //   flex: 1,
    width: '100%',
    height: '150%',
  },
  container: {
    //   flex:1,
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue'
  }
});
