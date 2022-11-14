import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({ navigation }) => {


  return (
      <View>
        <Text style={styles.textStyle}>Hi There!</Text>
          <Button
              onPress={() => navigation.navigate('Components')}
              title={'Go to Demo Component'}/>
          <Button
              onPress={() => navigation.navigate('List')}
              title={'Go to Demo List'}/>
          <Button
              onPress={() => navigation.navigate('Image')}
              title={'Go to Image Screen'}/>
          <Button
              onPress={() => navigation.navigate('Counter')}
              title={'Go to Counter Screen'}/>
        <Button
            onPress={() => navigation.navigate('Color')}
            title={'Go to Color Screen'}/>
          <Button
              onPress={() => navigation.navigate('Text')}
              title={'Go to Text Screen'}/>
          <Button
              onPress={() => navigation.navigate('Box')}
              title={'Go to Box Screen'}/>
      </View>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
