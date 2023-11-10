import searchbar from "./searchbar.module.css"

const SearchBar = ({ userInput, handleUserInput }) => {
	console.log(userInput)
	return (
		<div className={searchbar.container}>
			<input
				className={searchbar.input}
				placeholder="Search for robot here..."
				type="search"
				value={userInput}
				onChange={handleUserInput}
			/>
		</div>
	)
}
export default SearchBar
