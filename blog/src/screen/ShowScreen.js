import React, {useContext, useEffect} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Context} from "../../context/BlogContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
	const { id } = route.params;
	const { state } = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id === id);

	navigation.setOptions({
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Edit', {
				id: blogPost.id
			})}>
				<EvilIcons name={'pencil'} size={30}/>
			</TouchableOpacity>
		)
	})


	return (
		<View>
			<Text>{ blogPost.title }</Text>
			<Text>{ blogPost.content }</Text>
		</View>
	);
};

export default ShowScreen;
