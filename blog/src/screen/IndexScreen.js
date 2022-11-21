import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Context} from "../../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
	const {state, action} = useContext(Context)
	navigation.setOptions({
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name={'plus'} size={30}/>
			</TouchableOpacity>
		)
	})
	return (
		<View>
			<FlatList
				keyExtractor={(blogPost) => blogPost.title}
				data={state}
				renderItem={({item}) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
							<View style={styles.row}>
								<Text style={styles.title}>{item.title} - {item.id}</Text>
								<TouchableOpacity onPress={() => action.deleteBlogPost(item.id)}>
									<Feather name={'trash'} style={styles.icon}/>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					)
				}}/>
		</View>


	);
};


const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderTopWidth: 1,
		borderColor: 'grey'
	},
	title: {
		fontSize: 18
	},
	icon: {
		fontSize: 18
	}
})

export default IndexScreen;
