import React, {useState, useContext} from 'react';
import Button from './Button';
import calculateLogic, {initialState} from '../calculateLogic';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {LandscapeContext} from '../context/LandscapeContext';

const ButtonsPosition = () => {
  const {isLandscape} = useContext(LandscapeContext);
  const [state, setState] = useState(initialState);

  const handleClick = (type, value) => {
    setState(calculateLogic(type, value, state));
  };

  const firstRow = [
    {
      text: 'c',
      theme: 'secondary',
      onPress: () => handleClick('clear'),
    },
    {
      text: '+/-',
      theme: 'secondary',
      onPress: () => handleClick('posneg'),
    },
    {
      text: '%',
      theme: 'secondary',
      onPress: () => handleClick('percentage'),
    },
    {
      text: '/',
      theme: 'accent',
      onPress: () => handleClick('/'),
    },
  ];

  const secondRow = [
    {
      text: '7',
      onPress: () => handleClick('number', 7),
    },
    {
      text: '8',
      onPress: () => handleClick('number', 8),
    },
    {
      text: '9',
      onPress: () => handleClick('number', 9),
    },
    {
      text: 'x',
      theme: 'accent',
      onPress: () => handleClick('operator', '*'),
    },
  ];

  const thirdRow = [
    {
      text: '4',
      onPress: () => handleClick('number', 4),
    },
    {
      text: '5',
      onPress: () => handleClick('number', 5),
    },
    {
      text: '6',
      onPress: () => handleClick('number', 6),
    },
    {
      text: '-',
      theme: 'accent',
      onPress: () => handleClick('operator', '-'),
    },
  ];

  const fourthRow = [
    {
      text: '1',
      onPress: () => handleClick('number', 1),
    },
    {
      text: '2',
      onPress: () => handleClick('number', 2),
    },
    {
      text: '3',
      onPress: () => handleClick('number', 3),
    },
    {
      text: '+',
      theme: 'accent',
      onPress: () => handleClick('operator', '+'),
    },
  ];

  const fifthRow = [
    {
      text: '0',
      size: 'double',
      onPress: () => handleClick('number', 0),
    },
    {
      text: '.',
      theme: 'accent',
      onPress: () => handleClick('number', '.'),
    },
    {
      text: '=',
      theme: 'accent',
      onPress: () => handleClick('equal'),
    },
  ];

  const landscapeFirstRow = [
    {
      text: 'sqrt',
      theme: 'accent',
      onPress: () => handleClick('sqrt'),
    },
    {
      text: 'sin',
      theme: 'accent',
      onPress: () => handleClick('sin'),
    },
    ...firstRow,
  ];

  const landscapeSecondRow = [
    {
      text: 'x!',
      theme: 'accent',
      onPress: () => handleClick('factorial'),
    },
    {
      text: 'e^x',
      theme: 'accent',
      onPress: () => handleClick('exp'),
    },
    ...secondRow,
  ];

  const landscapeThirdRow = [
    {
      text: 'ln',
      theme: 'accent',
      onPress: () => handleClick('ln'),
    },
    {
      text: 'log10',
      theme: 'accent',
      onPress: () => handleClick('log10'),
    },
    ...thirdRow,
  ];

  const landscapeFourthRow = [
    {
      text: 'e',
      theme: 'accent',
      onPress: () => handleClick('e'),
    },
    {
      text: 'x^2',
      theme: 'accent',
      onPress: () => handleClick('double'),
    },
    ...fourthRow,
  ];

  const landscapeFifthRow = [
    {
      text: 'pi',
      theme: 'accent',
      onPress: () => handleClick('pi', 0),
    },
    {
      text: 'x^3',
      theme: 'accent',
      onPress: () => handleClick('triple', 0),
    },
    ...fifthRow,
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.flexSpace} />
      <Text style={styles.value}>
        {parseFloat(state.currentValue).toLocaleString()}
      </Text>
      <View style={styles.row}>
        {(isLandscape ? landscapeFirstRow : firstRow).map(item => (
          <Button text={item.text} theme={item.theme} onPress={item.onPress} />
        ))}
      </View>
      <View style={styles.row}>
        {(isLandscape ? landscapeSecondRow : secondRow).map(item => (
          <Button text={item.text} theme={item.theme} onPress={item.onPress} />
        ))}
      </View>
      <View style={styles.row}>
        {(isLandscape ? landscapeThirdRow : thirdRow).map(item => (
          <Button text={item.text} theme={item.theme} onPress={item.onPress} />
        ))}
      </View>
      <View style={styles.row}>
        {(isLandscape ? landscapeFourthRow : fourthRow).map(item => (
          <Button text={item.text} theme={item.theme} onPress={item.onPress} />
        ))}
      </View>
      <View style={styles.row}>
        {(isLandscape ? landscapeFifthRow : fifthRow).map(item => (
          <Button
            text={item.text}
            theme={item.theme}
            size={item.size ? item.size : null}
            onPress={item.onPress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  flexSpace: {
    flex: 2,
  },
  value: {
    color: '#fff',
    fontSize: 70,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default ButtonsPosition;
