import Robot from "./Robot"
import myrobots from "./robot.module.css"

const Robots = ({ robots }) => {
	return (
		<div className={myrobots.container}>
			{robots.map(robot => (
				<Robot
					key={robot.id}
					robots={robot}
				/>
			))}
		</div>
	)
}
export default Robots
