import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
const Input = ({ label }) => {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.Input} />
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	Input: { borderRadius: 10, borderWidth: 1, borderColor: '#989595', padding: 12 },
	label: { fontSize: 16, marginBottom: 6 },
});
