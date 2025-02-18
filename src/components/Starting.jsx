import { useRef } from "react";
import Buttons from "./Buttons";

export default function Starting({setUserName}) {

    const name = useRef();
    
    function handleSave() {
        const enteredName = name.current.value;
		console.log(enteredName)
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
        <>
            <h3>We'll help you to store your location throughout your trip and everyday life!</h3>
            <div>To start please enter you name in the input field</div>
            <input ref={name} type='text' />
			<Buttons onSave={handleSave} onCancel={handleCancel} />
        </>
        
    )
}