import React, { useState } from 'react';
import GlobalContext from '../GlobalContext';


const GlobalContextProvider = ({
	children
}) => {
	const [appVersion, setAppVersion] = useState('1.0.0');
	const [profileDetails, setProfileDetails] = useState({
		name: 'Jane',
		image: null,
		username: 'jane_doe',
		address: 'University Avenue, Boulder, CO',
		payment_details: null,
		transactions: []
	});

	// useEffect(() => {
	// 	// in realuity you will
	// 	// make an api call to backend to fetch profile details and setProfileDetails
	// }, []);

	return (
		<GlobalContext.Provider
			value={{
				appVersion,
				profileDetails
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalContextProvider;