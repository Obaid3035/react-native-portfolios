import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import ImageDetail from "../components/ImageDetail";
import Forest from '../../assets/images/forest.jpg';
import Beach from '../../assets/images/beach.jpg';
import Mountain from '../../assets/images/mountain.jpg';

const ImageScreen = () => {

	return (
		<View>
			<ImageDetail title={"Forest"} imageSource={require(`../../assets/images/forest.jpg`)} score={9}/>
			<ImageDetail title={"Beach"} imageSource={require(`../../assets/images/beach.jpg`)} score={3}/>
			<ImageDetail title={"Mountain"} imageSource={require(`../../assets/images/mountain.jpg`)} score={99}/>
		</View>
	)
};

const styles = StyleSheet.create({})

export default ImageScreen;
