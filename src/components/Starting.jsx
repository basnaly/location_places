import { useRef } from "react";
import Buttons from "./Buttons";

export default function Starting({setUserName}) {

    const name = useRef();
    
    function handleSave() {
        const enteredName = name.current.value;
		
        if (enteredName.trim() === "") {
            return;
        }

		setUserName(enteredName);
    }

    function handleCancel() {
		name.current.value = ''
		setUserData((prev) => {
			return {
				...prev,
				name: ''
			}
		})
	}

    return (
        <div className="flex flex-col text-center">
            <h3 className="text-2xl font-bold my-4">
                We'll help you to store your location throughout your trip and everyday life!
            </h3>
            <p className="my-4">
                To start please enter you name in the input field
            </p>
            <input 
                className="w-52 mt-5 p-2 border-1 rounded-md mx-auto"
                ref={name} type='text' 
            />
			<Buttons onSave={handleSave} onCancel={handleCancel} />
        </div>
        
    )
}