import scrollContainer from "./scrollContainer.module.css"

const ScrollContainer = ({ children }) => {
	return <div className={scrollContainer.container}>{children}</div>
}
export default ScrollContainer
