import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FloatingButtonStyles as styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
const FloatingAddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <FontAwesomeIcon size={40} icon={faPlus} />
    </TouchableOpacity>
  );
};

export default FloatingAddButton;
