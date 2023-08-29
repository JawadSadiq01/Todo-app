import { StyleSheet, Text, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import TaskScreen from './src/screens/TaskScreen';
import { Provider } from "react-redux";
import store from "./src/redux/store";

let persistor = persistStore(store);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Home" options={{ title: 'My Todos' }} component={HomeScreen} />
           <Stack.Screen name="todo" options={{ title: 'Todo Details' }} component={TaskScreen} />
         </Stack.Navigator>
       </NavigationContainer>
        </PersistGate>
      </Provider>
 );
}
