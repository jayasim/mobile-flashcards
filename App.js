import React from "react"
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native"
import styled from "styled-components/native"
import { Button, Spinner } from "nachos-ui"
import reducer from "./reducers"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { blue, black, white } from "./utils/colors"
import { Constants } from "expo"
import { connect } from "react-redux"
import HomeScreen from "./components/HomeScreen"
import { TabNavigator, StackNavigator } from "react-navigation"
import NewDeckScreen from "./components/NewDeckScreen"
import NewQuestionScreen from "./components/NewQuestionScreen"
import DeckDetailScreen from "./components/DeckDetailScreen"
import GameScene from "./components/GameScene"
import Flashcard from "./components/Flashcard"

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetailScreen
  },
  NewQuestion: {
    screen: NewQuestionScreen
  },
  NewDeck: {
    screen: NewDeckScreen
  },
  Game: {
    screen: GameScene,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
    /*
    navigationOptions: {
      header: null
    }
    */
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          {false && (
            <Flashcard
              question="LELELELELELE  UASD SADFU YSDUF YSDUF SDF ?"
              answer="LD SIDJ IDFG IHDSFG IHDFG "
              goNext={() => {
                console.log("ok!")
              }}
            />
          )}
          {true && <MainNavigator />}
        </View>
      </Provider>
    )
  }
}
