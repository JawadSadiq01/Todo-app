
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import TodoHeader from '../components/TodoHeader';

const TaskScreen = ({ route, navigation }) => {
 
  if(route?.params)
    var { todoId,todoTitle,todoDescription} = route?.params;

  return (
    <View>
      <TodoHeader id={todoId} title={todoTitle} description={todoDescription}/>
    </View>
  );  
};

export default TaskScreen;
