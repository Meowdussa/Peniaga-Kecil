import axios from 'axios';
import React from 'react'
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';


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
			<Card sx={{ maxWidth: 1200 }}>
				<CardActionArea style={{ backgroundColor: "white" }}>
					<CardMedia
						component="img"
						height="450"
						image="https://i.postimg.cc/ZKTQmtd0/header.jpg"
						alt="sate"
					/>
					<CardContent style={{ backgroundColor: "white", color: "black" }}>
						<Typography gutterBottom variant="h5" component="div">
							Sup Kawah
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Selamat datang ke kedai saya. Di sini pelbagai jenis makanan Melayu Sarawak
							ditawarkan,dari gulai ayam hingga ke ikan masak lemak. Silalah menjamu selera
							di kedai saya.
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Alamat : Lorong B11, RPR Sebiew, 97000 Bintulu
						</Typography>
						<Typography variant="body2" color="text.secondary">NOMBOR TELEFON  <a href="https://wa.me/01234578" target="blank">0102396193</a>
						</Typography>



					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}

export default Header
