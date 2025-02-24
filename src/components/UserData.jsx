
export default function UserData({
    userLocations,
    setUserLocations,
    getUserLocation,
    onDelete,
    isDisable,
}) {

    const tableClasses = "border border-stone-700 p-2";
    const buttonClasses = "px-4 py-2 mx-auto text-xl md:text-base rounded-md border-1 bg-stone-400 font-bold"

    function handleClearData() {
        setUserLocations([]);
    }

    return (
        <div className="flex flex-col text-center">
            <button disabled={isDisable} onClick={getUserLocation}
                className={`${buttonClasses} disabled:opacity-25 w-40 text-stone-800 hover:text-stone-100 hover:bg-stone-600`}
            >
                Get my location
            </button>
            <div className="mt-10 text-xl">Your Locations</div>
            <table className="border-collapse border border-stone-700 mx-8 mt-4 mb-8">
                <thead>
                    <tr>
                        <th scope="col" className={tableClasses}>User name</th>
                        <th scope="col" className={tableClasses}>Date</th>
                        <th scope="col" className={tableClasses}>Time</th>
                        <th scope="col" className={tableClasses}>Longitude</th>
                        <th scope="col" className={tableClasses}>Latitude</th>
                        <th scope="col" className={tableClasses}></th>
                    </tr>
                </thead>

                <tbody>
                    {userLocations.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td className={tableClasses}>{el.name}</td>
                                <td className={tableClasses}>{el.date}</td>
                                <td className={tableClasses}>{el.time}</td>
                                <td className={tableClasses}>{el.longitude}</td>
                                <td className={tableClasses}>{el.latitude}</td>
                                <td className={tableClasses}>
                                    <button
                                        onClick={() => onDelete(el.id)}
                                        className={`${buttonClasses} w-20 text-red-600 hover:text-red-900 hover:bg-stone-200`}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button
                onClick={handleClearData}
                className={`${buttonClasses} w-36 text-red-600 hover:text-red-900 hover:bg-stone-200`}
            >
                Clean all data
            </button>
        </div>
    )
}