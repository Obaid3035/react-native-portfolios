import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import {Context} from "../../context/BlogContext";

const EditScreen = ({ route, navigation}) => {

	const { id } = route.params;

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const { state, action } = useContext(Context)

	useEffect(() => {
		const blogPost = state.find((blogPost) => blogPost.id === id);
		setTitle(blogPost.title);
		setContent(blogPost.content)
	}, [id])

	const onUpdateHandler = () => {
		action.updateBlogPost(id, title, content)
		navigation.navigate('Home')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Edit Title</Text>
			<TextInput autoCorrect={false} autoCapitalize={'none'} style={styles.input} value={title} onChangeText={(val) => setTitle(val)}/>
			<Text style={styles.label}>Edit Content</Text>
			<TextInput style={styles.input} value={content} onChangeText={(val) => setContent(val)}/>
			<Button title={'Update'} onPress={onUpdateHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 18
	},
	label: {
		fontSize: 20,
		marginVertical: 8
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		fontSize: 18,
		borderRadius: 4,
		paddingVertical: 5,
		paddingHorizontal: 3
	}
})

export default EditScreen;
