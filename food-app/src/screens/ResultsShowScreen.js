import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
	const { id } = route.params;
	const [restaurant, setRestaurant ] = useState(null);
	console.log(id)

	useEffect(() => {
		getRestaurantById(id)
	}, [])

	const getRestaurantById = async (id) => {
		const response = await yelp.get(`/${id}`)
		setRestaurant(response.data)
	}

	if (!restaurant) return null;
	return (
		<View>
			<Text>{ restaurant.name }</Text>
			<FlatList
				data={restaurant.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return (
						<Image style={styles.image} source={{ uri: item}}/>
					)
				}}/>

		</View>
	);
};


const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300
	}
})

export default ResultsShowScreen;
