import Header from "./components/header/Header"
import ScrollContainer from "./components/scrollContainer/ScrollContainer"
import SearchBar from "./components/searchbar/SearchBar"
import Robots from "./components/robot/Robots"
import { robots } from "./robots"
import { useState } from "react"

const App = () => {
	const [userInput, setUserInput] = useState("")
	const [robot, setRobot] = useState([])
	const handleUserInput = ({ target }) => {
		setUserInput(target.value)
		setRobot(
			robots.filter(robot =>
				robot.name.toLowerCase().includes(userInput.toLowerCase())
			)
		)
	}

	return (
		<>
			<Header />
			<SearchBar
				handleUserInput={handleUserInput}
				userInput={userInput}
			/>
			<ScrollContainer>
				<Robots robots={robot} />
			</ScrollContainer>
		</>
	)
}
export default App
