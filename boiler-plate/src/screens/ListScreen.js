import React from 'react';
import {FlatList, Text, StyleSheet} from "react-native";

const ListScreen = () => {

	const friends = [
		{ name: 'Friend #1', age: 18},
		{ name: 'Friend #2', age: 18},
		{ name: 'Friend #3', age: 18},
		{ name: 'Friend #4', age: 18},
		{ name: 'Friend #5', age: 18},
		{ name: 'Friend #6', age: 18},
		{ name: 'Friend #7', age: 18},
		{ name: 'Friend #8', age: 18},
	]

	return <FlatList
		keyExtractor={friend => friend.name}
		data={friends}
		renderItem={({ item }) => {
			return <Text style={styles.textStyle} >{ item.name } - Age {item.age}</Text>
		}}/>

};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 30
	}
});

export default ListScreen;
