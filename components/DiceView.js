import React from 'react';
import {
  Animated, Button, View, Easing, StyleSheet, TouchableWithoutFeedback, TouchableHighlight,
} from 'react-native';
import Dice from './Dice';
import { getRandomNumber, isEven } from './Utils';

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backLayer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  contentsContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    height: '50%',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'space-around',
    backgroundColor: 'transparent',
  },
  dice: {
    margin: 50,
  },
});

class DiceView extends React.Component {
  constructor(props) {
    super(props);
    this.initialSpin = 1;
    this.dices = this.props.players.map((player, i) => ({
      index: player.index,
      initialPosition: isEven(i) ? { x: -400, y: -400 } : { x: 400, y: 400 },
      toPosition: { x: 0, y: 0 },
    }));
    this.state = {
      spinValue: new Animated.Value(this.initialSpin),
      positionValues: this.dices.map((dice) => new Animated.ValueXY(dice.initialPosition)),
      diceFaces: this.dices.map(() => getRandomNumber(1, 6)),
    };
  }

  rollDices = () => {
    const { spinValue, positionValues } = this.state;
    Animated.parallel([
      ...this.dices.map((dice, i) => (
        Animated.spring(positionValues[i], {
          toValue: dice.toPosition,
          tension: 10,
          friction: 50,
        }).start()
      )),
      Animated.timing(spinValue, {
        toValue: 0,
        duration: 1500,
        easing: Easing.out(Easing.exp),
      }).start(),
    ]);
  }

  resetDices = () => {
    this.setState({
      spinValue: new Animated.Value(this.initialSpin),
      positionValues: this.dices.map((dice) => new Animated.ValueXY(dice.initialPosition)),
      diceFaces: this.dices.map(() => getRandomNumber(1, 6)),
    });
  }

  render() {
    const { spinValue, positionValues, diceFaces } = this.state;
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-360deg'],
    });
    const animatedStyle = { transform: [{ rotate: spin }] };
    return (
      <View style={styles.screen}>
        <TouchableHighlight
          onPress={this.props.setDiceViewVisible(false)}
          style={styles.backLayer}
        >
          <View style={styles.contentsContainer}>
            <Button title='roll' onPress={this.rollDices} />
            <View
              style={{ ...styles.diceContainer, width: `${100 - (2 - this.dices.length / 2) * 10}%` }}
            >
              {
                this.dices.map((dice, i) => (
                  <Animated.View
                    key={dice.index + 1}
                    style={[styles.dice, positionValues[i].getLayout(), animatedStyle]}
                  >
                    <Dice
                      face={diceFaces[i]}
                      color={dice.color}
                    />
                  </Animated.View>
                ))
              }
            </View>
            <Button title='reset' onPress={this.resetDices} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default DiceView;
