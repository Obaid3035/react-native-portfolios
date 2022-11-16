import React, {useState} from "react";
import {Text, StyleSheet, View} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchInput, setSearchInput] = useState('');

    const onSearchHandler = () => {
        console.log('Submitted')
    }
  return (
      <View>
        <SearchBar
            search={searchInput}
            onSearchChange={(value) => setSearchInput(value)}
            onSearchHandler={onSearchHandler}/>
        <Text style={styles.text}>{ searchInput}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
