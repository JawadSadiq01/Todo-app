import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/features/todos/todoSlice";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { timeAgo } from "./TimeAgo";
import { ListStyles as styles } from "./styles";
import { faDeleteLeft, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
function TodoList(){

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos).slice().sort((a, b) => b.timestamp - a.timestamp);
  const [filteredTodos,setFilteredTodos] = useState(todos);
  const navigation = useNavigation()

  const onDelete = (id) => {
    dispatch(deleteTodo((id)));
  };

  const onUpdate = (id,task,description) => {
    navigation.navigate('todo', {
      todoId: id,
      todoTitle: task,
      todoDescription: description
    });
  };
  
  const FilterTodos =(search)=>{
    setSearch(search)
    const searchedTodos = todos.filter(todo =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTodos(searchedTodos)
  }

  const renderItem = ({ item }) => {

    const agoTime = timeAgo(new Date(item.timestamp)) 

    return (
      <View style={styles.item}>
      <Text style={styles.timeStamp}>{agoTime}</Text>
      <View style={styles.mainTodo}>
        <View style={{width:'70%'}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.description}>{item.description}</Text>
        </View>
          <View style={styles.todoActions}>
            <TouchableOpacity
              style={[styles.deleteButton,{paddingRight:10}]}
              onPress={() =>onUpdate(item.id,item.title,item.description)}
            >
              <FontAwesomeIcon size={25} color="blue" icon={faPenToSquare} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete(item.id)}
            >
              <FontAwesomeIcon size={25}  color="red" icon={faTrash} />
            </TouchableOpacity>
          </View>
          </View>
      </View>
    );
  };

  const renderEmptyMessage = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>No Todos available!</Text>
    </View>
  );

  return (
    <View style={{height:'100%'}}>
       <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            margin: 10,
            alignSelf:'center',
            width: "90%",
            borderRadius: 5,
          }}
          placeholder="Search todos"
          onChangeText={FilterTodos}
          value={search}
        />
      <FlatList
        data={search.length!=0?filteredTodos: todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyMessage}
      />
    </View>
  );
};

export default memo(TodoList);