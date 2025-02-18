

export default function Greeting({userName}) {

    let dayTime = "Morning";
    const todayDay = new Date();
    let currentHour = todayDay.getHours();
    if (currentHour > 12 && currentHour < 17) {
        dayTime = "Afternoon"
    } else if (currentHour > 17 && currentHour < 23) {
        dayTime = "Evening"
    } else if (currentHour > 23 && currentHour < 6) {
        dayTime = "Night"
    }
    console.log(currentHour)


    if (userName === '') {
        userName = 'guest';
    }
    
    return (
        <div>
            <div>Good {dayTime}, {userName}!</div>
        </div>
    )
}