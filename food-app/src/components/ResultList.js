import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, restaurant }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{ title }</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={restaurant}
				keyExtractor={(restaurant) => restaurant.id}
				renderItem={({ item }) => {
					return <ResultDetail restaurant={item}/>
				}}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10
	},
	title: {
		fontSize: 18,
		marginLeft: 15,
		fontWeight: 'bold',
		marginBottom: 5,
	}
});

export default ResultList;
