import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

const CounterScreen = () => {
	const [counter, setCounter] = React.useState(0)
	return (
		<View>
			<Button title={'Increment'} onPress={() => setCounter(counter + 1)}/>
			<Button title={'Decrement'} onPress={() => setCounter((prevCounter) => {
				if (prevCounter <= 0) return 0;
				return prevCounter - 1;
			})}/>
			<Text> Current Counter is:  { counter } </Text>
		</View>
	);
};

const styles = StyleSheet.create({})

export default CounterScreen;
