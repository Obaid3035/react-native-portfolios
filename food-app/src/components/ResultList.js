import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ResultDetail from "./ResultDetail";
import { useNavigation } from '@react-navigation/native';

const ResultList = ({ title, restaurant }) => {

	const navigation = useNavigation();

	if (!restaurant.length) return null;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{ title }</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={restaurant}
				keyExtractor={(restaurant) => restaurant.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id})}>
							<ResultDetail restaurant={item}/>
						</TouchableOpacity>
					)
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
