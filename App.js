/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	Image,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import {
	createNativeStackNavigator
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GlobalContextProvider from './src/context/GlobalContext/provider/GlobalContextProvider';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import AccountIcon from './src/assets/icons/user.png';
import HeaderTitle from './src/components/HeaderTitle';

const Stack = createNativeStackNavigator();
function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar
				animated
				translucent
				backgroundColor='#000'
				barStyle='light-content'
			/>
			<GlobalContextProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName='Home'>
						<Stack.Screen 
							name='Home'
							children={Home}
							options={({ navigation }) => ({
								headerTitle: () => <HeaderTitle />,
								headerRight: () => (
									<TouchableOpacity
										onPress={() => navigation.navigate('Profile')}
									>
										<Image source={AccountIcon} style={{ width: 20, height: 20 }} />
									</TouchableOpacity>
								),
								headerStyle: {
									backgroundColor: '#263238',
								},
							})}
						/>
						<Stack.Screen 
							name='Profile'
							children={Profile}
							options={() => ({	
								headerTitle: () => <HeaderTitle title='My Profile' />,
								headerStyle: {
									backgroundColor: '#263238',
								},
								headerTintColor: '#fff',
							})}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</GlobalContextProvider>
		</SafeAreaView>
	);
};

export default App;
