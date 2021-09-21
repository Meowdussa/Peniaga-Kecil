import React from 'react'
import { useState } from "react";


function Header() {
    
  const [image, setImage] = useState("https://fakeimg.pl/350x350/");

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
  }


    return (
			<div>
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ height: "80vh" }}
				>
					<div className="w-25 mt-5 mx-auto">
						<div>
							<img src={image} className="img-thumbnail" alt="..." />
						</div>
						<div className="my-3">
							<label htmlFor="formFile" className="form-label">
								Upload image here
							</label>
							<input
								onChange={handleUploadChange}
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
