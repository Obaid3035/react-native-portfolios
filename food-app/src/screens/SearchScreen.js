import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import SearchBar from "../components/SearchBar";
import useRestaurant from "../hooks/useRestaurant";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
	const [searchInput, setSearchInput] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurant();
	console.log(restaurants)

	const filterRestaurantsByPrice = (price) => {
		return restaurants.filter((restaurant) => restaurant.price === price)
	}
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
			<ResultList restaurant={filterRestaurantsByPrice('$')} title={'Cost Effective'}/>
			<ResultList restaurant={filterRestaurantsByPrice('$$')} title={'Bit Pricier'}/>
			<ResultList restaurant={filterRestaurantsByPrice('$$$')} title={'Big Spender'}/>
		</View>
	)
};

const styles = StyleSheet.create({});

export default SearchScreen;
