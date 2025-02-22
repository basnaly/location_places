import { useEffect, useState } from 'react';
import Greeting from './components/Greeting';
import UserData from './components/UserData';
import Starting from './components/Starting';

const locationData = JSON.parse(localStorage.getItem("userLocations")) || [];

function App() {

	const [userName, setUserName] = useState('');
	const [userLocations, setUserLocations] = useState(locationData
		// {
		// 	id: undefined,
		// 	date: '',
		// 	time: '',
		// 	longitude: '',
		// 	latitude: '',
		// }
	);

	localStorage.clear();

	function getUserLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position)

			const id = Math.random();
			const userLongitude = position.coords.longitude;
			const userLatitude = position.coords.latitude;
			const currentDate = new Date(position.timestamp).toLocaleDateString();
			const currentTime = new Date(position.timestamp).toLocaleTimeString();

			setUserLocations((prev) => {
				if (prev.some((el) => el.id === id)) {
					return prev;
				}

				return [
					...prev,
					{
						id: id,
						date: currentDate,
						time: currentTime,
						longitude: userLongitude,
						latitude: userLatitude,
					}
				]
			})
		})
	}

	useEffect(() => {
		localStorage.setItem(
			"userLocations",
			JSON.stringify(userLocations)
		)
	}, [userLocations])

	console.log(userLocations)
		
	return (
		<div className="bg-[url('./assets/ai-location.jpg')] bg-(position-10) h-screen">
			<Greeting
				userName={userName}
				setUserName={setUserName}
			/>
			{userName ?
				<UserData userLocations={userLocations} getUserLocation={getUserLocation} /> :
				<Starting setUserName={setUserName} />
			}
		</div>
	)
}

export default App
