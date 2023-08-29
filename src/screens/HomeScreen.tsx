
import React from 'react';
import { View, Text } from 'react-native';
import TodoList from '../components/TodoList';
import FloatingAddButton from '../components/FloatingAddButton';

const HomeScreen = ({ navigation }) => {

  const handleAddButtonPress = () => {
    navigation.navigate('todo')
  };
  return (
    <View style={{height:'100%'}}>
         <TodoList/>
         <FloatingAddButton onPress={handleAddButtonPress}/>
    </View>
  );
};

export default HomeScreen;
