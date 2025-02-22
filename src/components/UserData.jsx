
export default function UserData({ userLocations, getUserLocation }) {

    const tableClasses = "border border-stone-700 p-2";
    const buttonClasses = "px-4 py-2 w-40 mx-auto text-xl md:text-base rounded-md border-1 text-stone-800  bg-stone-400 font-bold hover:bg-stone-600 hover:text-stone-100"

    return (
        <div className="flex flex-col text-center">
            <button onClick={getUserLocation}
                className={buttonClasses}
            >Get my location</button>
            <div className="mt-10 text-xl">Your Locations</div>
            <table className="border-collapse border border-stone-700 mx-8 mt-4">
                <thead>
                    <tr>
                        <th scope="col" className={tableClasses}>Date</th>
                        <th scope="col" className={tableClasses}>Time</th>
                        <th scope="col" className={tableClasses}>Longitude</th>
                        <th scope="col" className={tableClasses}>Latitude</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {userLocations.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td className={tableClasses}>{el.date}</td>
                                <td className={tableClasses}>{el.time}</td>
                                <td className={tableClasses}>{el.longitude}</td>
                                <td className={tableClasses}>{el.latitude}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}