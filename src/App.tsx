import { useState } from "react";
import UserProfile from "./components/UserProfile";
import UserContext from "./context/UserContext";
import "./App.css";

function App() {
	const [isOnline, setIsOnline] = useState(false);

	return (
		<>
			<UserContext.Provider
				value={{ isOnline: isOnline, setIsOnline: setIsOnline }}
			>
				<UserProfile />
			</UserContext.Provider>
		</>
	);
}
export default App;
