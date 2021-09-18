import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import ArrowIcon from '../../assets/icons/arrow.png';


const Card = ({
	title,
	completionStatus
}) => {
	return (
		<TouchableOpacity style={[style.container, completionStatus === 0? style.notStarted: completionStatus < 100? style.pending : style.completed]}>
			<View style={style.content}>
				<Text style={style.title}>{title}</Text>
				<Text style={style.completionStatus}>Completed: {completionStatus}%</Text>
			</View>
			<Image source={ArrowIcon} style={style.viewTutorial} />
		</TouchableOpacity>
	)
};

export default Card;