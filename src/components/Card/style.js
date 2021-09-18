import { StyleSheet } from 'react-native';
import { colors } from '../../assets/variables';

const style = {
	container: {
		height: 120,
		borderRadius: 10,
		padding: 10,
		margin: 10,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		elevation: 3,
		backgroundColor: '#e0f7fa'
	},
	content: {
		flexDirection: 'column'
	},
	title: {
		fontSize: 17,
		fontWeight: 'bold',
		maxWidth: 100
	},
	completionStatus: {
		fontSize: 13,
		color: colors.black
	},
	viewTutorial: {
		width: 20,
		height: 20,
		alignSelf: 'center',
	},
	completed: {
		backgroundColor: colors.success,
	}
};

export default StyleSheet.create(style);