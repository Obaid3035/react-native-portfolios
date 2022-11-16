import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import SearchBar from "../components/SearchBar";
import useRestaurant from "../hooks/useRestaurant";

const SearchScreen = () => {
	const [searchInput, setSearchInput] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurant();
	return (
		<View>
			<SearchBar
				search={searchInput}
				onSearchChange={(value) => setSearchInput(value)}
				onSearchSubmit={() => searchApi(searchInput)}/>
			{
				errorMessage ? <Text>{errorMessage}</Text> : null
			}
			<Text style={styles.text}>We have found {restaurants.length} restaurants</Text>
		</View>
	)
};

const styles = StyleSheet.create({});

export default SearchScreen;
