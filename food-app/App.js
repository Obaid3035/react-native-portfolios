import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


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
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator initialRouteName={'Home'}>
				<Stack.Screen
					name={'Search'}
					component={SearchScreen}
					options={{title: 'Business Search'}}
				/>
				<Stack.Screen
					name={'ResultsShow'}
					component={ResultsShowScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}


export default App;
