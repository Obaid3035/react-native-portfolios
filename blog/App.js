import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IndexScreen from "./src/screen/IndexScreen";
import { Provider } from "./context/BlogContext";
import ShowScreen from "./src/screen/ShowScreen";
import CreateScreen from "./src/screen/CreateScreen";
import {TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";
import EditScreen from "./src/screen/EditScreen";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const App = () => {
  return (
      <Provider>
          <NavigationContainer theme={MyTheme}>
              <Stack.Navigator initialRouteName={'Home'}>
                  <Stack.Screen
                      name={'Home'}
                      component={IndexScreen}

                  />
                  <Stack.Screen name={'Show'} component={ShowScreen}/>
                  <Stack.Screen name={'Create'} component={CreateScreen}/>
                  <Stack.Screen name={'Edit'} component={EditScreen}/>
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  )
}


export default App;
