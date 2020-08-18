import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress, type }) => {
	if (type == 'SignIn') {
		return (
			<TouchableOpacity style={styles.container(type)} onPress={onPress}>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		);
	}
	return (
		<TouchableOpacity style={styles.container(type)} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: (type) => ({
		paddingVertical: 15,
		borderRadius: 7,
		backgroundColor: type === 'SignIn' ? '#FFC344' : '#E5E5E5',
	}),
	text: {
		fontSize: 16,
		textAlign: 'center',
	},
});
