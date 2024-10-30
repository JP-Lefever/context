import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
	const { isOnline, setIsOnline } = useContext(UserContext);
	return (
		<>
			{isOnline && <p>User is on line </p>}
			{!isOnline && <p>User is off line </p>}

			<button type="button" onClick={() => setIsOnline(!isOnline)}>
				click to change user status{" "}
			</button>
		</>
	);
}

export default UserProfile;
