import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, restaurant }) => {
	return (
		<View>
			<Text style={styles.title}>{ title }</Text>
			<FlatList
				horizontal
				data={restaurant}
				keyExtractor={(restaurant) => restaurant.id}
				renderItem={({ item }) => {
					return <ResultDetail restaurant={item}/>
				}}/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default ResultList;
