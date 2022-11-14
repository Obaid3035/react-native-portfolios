import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from "react-native";

const TextScreen = () => {
	const [value, setValue] = useState('')
	return (
		<View>
			<TextInput
				style={styles.input}
				autoCapitalize={"none"}
				autoCorrect={false}
				value={value}
				onChangeText={(val) => setValue(val)}
			/>
			<Text>{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	}
})

export default TextScreen;
