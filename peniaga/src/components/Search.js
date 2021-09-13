import React, { useState } from "react";

function Search({ placeholder, data }) {
	const [filteredData, setfilteredData] = useState([]);

	const handleFilter = (event) => {
		const searchWord = event.target.value; //the word user enter
		const newFilter = data.filter((value) => {
			//will loop thru the data set and store the data in the value
			return value.address.includes(searchWord); // if the search word includes the value, then we wanna keep it
		});
		setfilteredData(newFilter);
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input type="text" placeholder={placeholder} onChange={handleFilter} />
				<div className="searchIcon">
					<svg //search icon
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-search"
						viewBox="0 0 16 16"
					>
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg>
				</div>
				{filteredData.length != 0 && (
					<div className="dataResult">
						{filteredData.map((value, key) => {
							return (
								<a className="dataItem">
									<p>{value.address}</p>
								</a>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default Search;
