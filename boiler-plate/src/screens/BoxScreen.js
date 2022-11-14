import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

const BoxScreen = () => {
	return (
		<View style={styles.viewStyles}>
			<View  style={styles.textAStyle}/>
			<View  style={styles.textBStyle}/>
			<View  style={styles.textCStyle}/>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyles: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 200,
	},
	textAStyle: {
		backgroundColor: 'red',
		height: 50,
		width: 50
	},
	textBStyle: {
		backgroundColor: 'blue',
		height: 50,
		width: 50,
		alignSelf: 'flex-end'
	},
	textCStyle: {
		backgroundColor: 'green',
		height: 50,
		width: 50
	},
})

export default BoxScreen;
