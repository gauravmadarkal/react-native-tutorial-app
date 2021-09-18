import { StyleSheet } from 'react-native';
import { colors } from '../../assets/variables';

const style = {
	container: {
		flex: 1, 
		backgroundColor: colors.bg,
		padding: 10,
		paddingTop: 20
	},
	sectionHeader: {
		fontSize: 20,
		fontWeight: 'bold'
	}
};

export default StyleSheet.create(style);