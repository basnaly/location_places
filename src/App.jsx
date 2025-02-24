import { useEffect, useState } from 'react';
import Greeting from './components/Greeting';
import UserData from './components/UserData';
import Starting from './components/Starting';

const locationData = JSON.parse(localStorage.getItem("userLocations")) || [];

function App() {

	const [userName, setUserName] = useState('');
	const [userLocations, setUserLocations] = useState(locationData);
	const [isDisable, setIsDisable] = useState(false);

	function getUserLocation() {
		setIsDisable(true);
		
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
						name: userName,
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
		setIsDisable(false)
		localStorage.setItem(
			"userLocations",
			JSON.stringify(userLocations)
		)
	}, [userLocations])

	function deleteLocation(id) {
		setUserLocations((prevLocations) => (
			prevLocations.filter((location) => location.id !== id)
		))
	}
		
	return (
		<div className="bg-[url('./assets/ai-location.jpg')] bg-(position-10) h-screen">
			<Greeting
				userName={userName}
				setUserName={setUserName}
			/>
			{userName ?
				<UserData 
					setUserLocations={setUserLocations}
					userLocations={userLocations} 
					getUserLocation={getUserLocation} 
					onDelete={deleteLocation}
					isDisable={isDisable} 
				/> 
				:
				<Starting setUserName={setUserName} />
			}
		</div>
	)
}

export default App
