import axios from 'axios';
import React from 'react'
import { useState } from "react";


function Header() {
	const [image, setImage] = useState("");
	let [input, setInput] = useState({});
	let [error, setError] = useState(null);

	const handleChange = (event) => {
		const value = event.target.value;
		setInput({ ...input, [event.target.name]: value });
		console.log(input,'in input')
	};

	const addImage = ()=>{
		axios
		.post(``)
	}

	return (
		<div>
			<div
				className="d-flex justify-content-center align-items-center"
			>
				<div>
					<img name="header_image" src={image} className="img-thumbnail" alt="..." />

					<div>
						<label htmlFor="formFile" className="form-label">
							Masukkan gambar sini
						</label>
						<input
							/* onChange={(e) => {
								uploadImage(e);
							}} */
							className="form-control"
							type="file"
							id="formFile"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header
