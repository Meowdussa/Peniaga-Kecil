import React from 'react'
import { useState } from "react";


function Header() {
    
const [image, setImage] = useState('');

const uploadImage = async(e) => {
	//console.log(e.target.file);
	const file = e.target.files[0];
	const base64 = await convertBase64(file);
	console.log(base64);
	setImage(base64);
}

const convertBase64 = (file)=>{
	return new Promise((resolve,reject)=>{
		const fileReader= new FileReader();
		fileReader.readAsDataURL(file);

		fileReader.onload= (()=>{
			resolve(fileReader.result);
		});
		fileReader.onerror=((error)=>{
			reject(error);
		})
	})
}

/*   function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
  }
 */

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
								Masukkan gambar sini
							</label>
							<input
								onChange={(e)=>{
									uploadImage(e);
								}}
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
