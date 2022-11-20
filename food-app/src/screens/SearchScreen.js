import React, {useState} from "react";
import {ScrollView, StyleSheet, Text} from "react-native";

import SearchBar from "../components/SearchBar";
import useRestaurant from "../hooks/useRestaurant";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
	const [searchInput, setSearchInput] = useState('');
	const [searchApi, restaurants, errorMessage] = useRestaurant();

	const filterRestaurantsByPrice = (price) => {
		return restaurants.filter((restaurant) => restaurant.price === price)
	}
	return (
		<>
			<SearchBar
				search={searchInput}
				onSearchChange={(value) => setSearchInput(value)}
				onSearchSubmit={() => searchApi(searchInput)}/>
			{
				errorMessage ? <Text>{errorMessage}</Text> : null
			}
			<ScrollView>
				<ResultList
					restaurant={filterRestaurantsByPrice('$')}
					title={'Cost Effective'}
				/>
				<ResultList
					restaurant={filterRestaurantsByPrice('$$')}
					title={'Bit Pricier'}
				/>
				<ResultList
					restaurant={filterRestaurantsByPrice('$$$')}
					title={'Big Spender'}
				/>
			</ScrollView>
		</>
	)
};

const styles = StyleSheet.create({});

export default SearchScreen;
