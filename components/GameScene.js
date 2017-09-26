import React, { Component } from "react"
import { Text, View } from "react-native"
import { H1, H2, Button } from "native-base"
import FinalGameScene from "./FinalGameScene"
import { connect } from "react-redux"
import Flashcard from "./Flashcard"

class GameScene extends Component {
  state = {
    currentQuestion: 0
  }

  goNext = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
  }

  render() {
    const { deckKey, deck } = this.props

    if (deck.questions[this.state.currentQuestion])
      return (
        <Flashcard
          question={deck.questions[this.state.currentQuestion].question}
          answer={deck.questions[this.state.currentQuestion].answer}
          goNext={this.goNext}
        />
      )
    else
      return (
        <View>
          <FinalGameScene />
        </View>
      )
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckKey } = navigation.state.params

  return {
    deckKey,
    deck: state.decks[deckKey]
  }
}

export default connect(mapStateToProps)(GameScene)
