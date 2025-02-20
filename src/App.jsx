import { useEffect, useState } from 'react';
import Greeting from './components/Greeting';
import UserData from './components/UserData';
import Starting from './components/Starting';

function App() {

	const [userName, setUserName] = useState('');
	const [userLocation, setUserLocation] = useState([
		{
			id: undefined,
			date: '',
			time: '',
			longitude: '',
			latitude: '',
		}
	]);

	console.log(userLocation)    

	useEffect(() => {
		const userLocation = navigator.geolocation.getCurrentPosition((position) => {
			console.log(position)
			const id = position.timestamp
			const userLongitude = position.coords.longitude;
			const userLatitude = position.coords.latitude;

			// const userDate = new Date(position.timestamp * 1000);
			// const userYear = userDate.getFullYear();
			// const userMonth = userDate.getMonth() + 1;
			// const userDay = userDate.getDate();

			const currentDate = new Date(position.timestamp).toLocaleDateString();
			const currentTime = new Date(position.timestamp).toLocaleTimeString();
			console.log(currentTime)

			setUserLocation((prev) => {
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
	}, [])

	return (
		<div className="bg-[url('./assets/ai-location.jpg')] bg-(position-10) h-screen">
			<Greeting
				userName={userName}
				setUserName={setUserName}
			/>
			{userName ?
				<UserData userLocation={userLocation} /> :
				<Starting setUserName={setUserName} />
			}
		</div>
	)
}

export default App
