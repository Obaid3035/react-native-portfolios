import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import {Context} from "../../context/BlogContext";

const CreateScreen = ({ navigation}) => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const { state, action } = useContext(Context)

	const onCreateHandler = () => {
		action.addBlogPost(title, content)
		navigation.navigate('Home')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter Title</Text>
			<TextInput autoCorrect={false} autoCapitalize={'none'} style={styles.input} value={title} onChangeText={(val) => setTitle(val)}/>
			<Text style={styles.label}>Enter Content</Text>
			<TextInput style={styles.input} value={content} onChangeText={(val) => setContent(val)}/>
			<Button title={'Create'} onPress={onCreateHandler} />
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

export default CreateScreen;
