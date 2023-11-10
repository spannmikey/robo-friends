import robot from "./robot.module.css"

const Robot = ({ robots }) => {
	return (
		<div className={robot.card}>
			<img
				alt="robots"
				src={`https://robohash.org/${robots.id}?size=200x200`}
			/>
			<h3>{robots.name}</h3>
			<p>{robots.email}</p>
		</div>
	)
}
export default Robot
