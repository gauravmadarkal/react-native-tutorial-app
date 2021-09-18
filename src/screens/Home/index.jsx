import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { tutorials } from '../../assets/constants';
import Card from '../../components/Card';
import style from './style';

const Home = () => {
	return (
		<ScrollView style={style.container}>
			{Object.keys(tutorials).map((key) => (
				<View>
					<Text style={style.sectionHeader}>{key}</Text>
					<FlatList 
						data={tutorials[key]}
						horizontal
						showsHorizontalScrollIndicator={false}
						renderItem={({ item }) => (
							<Card 
								title={item.title}
								completionStatus={item.status}
							/>
						)}
					/>
				</View>
			))}
		</ScrollView>
	)
};

export default Home;