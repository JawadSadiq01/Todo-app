import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FloatingButtonStyles as styles } from './styles';
const FloatingAddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>＋</Text>
    </TouchableOpacity>
  );
};

export default FloatingAddButton;
