import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({ searchInput, onSearchChange, onSearchSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather
				style={styles.iconStyle}
				name={'search'}/>
			<TextInput
				autoCapitalize={'none'}
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder={'Search'}
				value={searchInput}
				onChangeText={onSearchChange}
				onEndEditing={onSearchSubmit}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom:10
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});


export default SearchBar;
