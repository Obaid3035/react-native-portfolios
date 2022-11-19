import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const ResultDetail = ({ restaurant }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: restaurant.image_url }}/>
			<Text style={styles.name}>{restaurant.name}</Text>
			<Text>{ restaurant.rating } Stars, { restaurant.review_count } Reviews</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15
	},
	image: {
		height: 120,
		width: 250,
		borderRadius: 4,
		marginBottom: 5
	},
	name: {
		fontSize: 14,
		fontWeight: 'bold'
	}
})

export default ResultDetail;
