import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import {LandscapeContext} from '../context/LandscapeContext';

const screen = Dimensions.get('screen');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderWidth: 3,
    borderColor: '#999999',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth + 10),
    margin: 5,
    textAlign: 'center',
  },
  buttonLandscape: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderWidth: 3,
    borderColor: '#333333',
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth + 10),
    margin: 5,
    textAlign: 'center',
  },
  buttonDouble: {
    width: screen.width / 2.1,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonDoubleLandscape: {
    width: screen.height / 3.4,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
    borderWidth: 0,
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
    borderWidth: 0,
  },
});

export default ({onPress, text, size, theme}) => {
  const {isLandscape} = useContext(LandscapeContext);
  const buttonStyles = [styles.button];
  const buttonStylesLandscape = [styles.buttonLandscape];
  const textStyles = [styles.text];

  if (size === 'double') {
    if (isLandscape) {
      buttonStylesLandscape.push(styles.buttonDoubleLandscape);
    } else {
      buttonStyles.push(styles.buttonDouble);
    }
  }

  if (theme === 'secondary') {
    if (isLandscape) {
      buttonStylesLandscape.push(styles.buttonSecondary);
    } else {
      buttonStyles.push(styles.buttonSecondary);
    }
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    if (isLandscape) {
      buttonStylesLandscape.push(styles.buttonAccent);
    } else {
      buttonStyles.push(styles.buttonAccent);
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={isLandscape ? buttonStylesLandscape : buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
