import React, {useEffect, useState} from "react";
import {Text, StyleSheet, View} from "react-native";
import yelp from "../api/yelp";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchInput, setSearchInput] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null)

    const onSearchApi = async (searchTerm) => {
        try {
            const res = await yelp.get(`/search`, {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setRestaurants(res.data.businesses)
        } catch (e) {
            setErrorMessage('Something went wrong')
        }
    }
  return (
      <View>
        <SearchBar
            search={searchInput}
            onSearchChange={(value) => setSearchInput(value)}
            onSearchSubmit={() => onSearchApi(searchInput)}/>
          {
              errorMessage ?  <Text>{ errorMessage }</Text> : null
          }
        <Text style={styles.text}>We have found {restaurants.length} restaurants</Text>
      </View>
  )
};

const styles = StyleSheet.create({
});

export default SearchScreen;
