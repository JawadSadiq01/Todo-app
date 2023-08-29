import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/features/todos/todoSlice";
import { useNavigation } from "@react-navigation/native";
import { HeaderStyles as styles } from "./styles";
 
const TodoHeader = ({id,title,description}) => {
  const [todoTitle, setTodoTitle] = useState(title||"");
  const [todoDescription, setTodoDescription] = useState(description||"");
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const onSubmitTask=()=>{
    id? UpdateTask():CreateNewTask()
  }

  const validateTask=()=>{
    if (todoTitle?.trim().length === 0) {
      Alert.alert("Enter task title!");
      return false;
    }
    if(todoDescription.trim().length === 0) {
      Alert.alert("Enter a task description!");
      return false;
    }
    return true
  }

  const CreateNewTask = () => {
    if (validateTask()==true) {
      dispatch(addTodo({title: todoTitle,description:todoDescription}));
      navigation.navigate("Home")
    }else return
  };

  const UpdateTask = ()=>{
    if (validateTask()==true) {
    dispatch(updateTodo({id,title:todoTitle,description:todoDescription}))
    navigation.navigate("Home")
    }else return
  };

  return (
    <View>
      <Text style={styles.heading}>
         {id? "Update you Todo":"Add new"}
      </Text>
      <View style={styles.mainContainer}>
        
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          onChangeText={setTodoTitle}
          value={todoTitle}
        />

        <TextInput
          style={styles.textInput}
          numberOfLines={10}
          multiline = {true}
          placeholder="Description"
          onChangeText={setTodoDescription}
          value={todoDescription}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={onSubmitTask}
        >
          <Text style={{ color: "white" }}>
            {id? "UPDATE":"ADD"}
          </Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default TodoHeader;
