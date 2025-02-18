
export default function UserData({ userLocation }) {

    return (
        <div>
            <div>Your Locations</div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Longitude</th>
                        <th scope="col">Latitude</th>
                    </tr>
                </thead>

                <tbody>
                    {userLocation.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td>{el.date}</td>
                                <td>{el.time}</td>
                                <td>{el.longitude}</td>
                                <td>{el.latitude}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button>Add new location</button>
        </div>
    )
}