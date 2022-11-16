import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const ResultDetail = ({ restaurant }) => {
	return (
		<View>
			<Text>{restaurant.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({})

export default ResultDetail;
