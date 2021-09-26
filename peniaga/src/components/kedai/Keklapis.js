import { useState, useEffect } from "react";
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
let axios = require("axios");

function Keklapis() {
	let [item, setItem] = useState([]);
	let [owner, setOwner] = useState([]);

	useEffect(() => {
		getShop();
		getItem();
	}, []);


	/* useEffect(() => {
		console.log(getShop());
		getShop();		
	}, []);
 */

	const getItem = () => {
		axios
			.get("http://localhost:5000/itemapi", item)
			.then((response) => {
				console.log(response.data);
				setItem(response.data);
			})
			.catch(function (error) {
				console.log("Error getting items");
			});
	};

	const getShop = () => {
		axios
			.get("http://localhost:5000/ownerapi", owner)
			.then((response) => {
				console.log(response.data);
				setOwner(response.data);
			})
			.catch(function (error) {
				console.log("Error getting shops");
			});
	};

	return (
		<div>
			<Grid container>
				<Grid item xs={12}>
					<Card sx={{ maxWidth: 1200 }}>
						<CardActionArea style={{ backgroundColor: "white" }}>
							<CardMedia
								component="img"
								height="450"
								image="https://i.postimg.cc/qq3703f8/header.jpg"
								alt="kek"
							/>
							<CardContent
								style={{ backgroundColor: "white", color: "black" }}
							>
								{owner.map(
									(e) =>{
										e.owner_id === "38" && (
											<Typography gutterBottom variant="h5" component="div">
										<h3>{e.shop_name}</h3>
										</Typography>
								)})}
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default Keklapis;

{/* <Card sx={{ maxWidth: 1200 }}>
					<CardActionArea style={{ backgroundColor: "white" }}>
						<CardMedia
							component="img"
							height="450"
							image="https://i.postimg.cc/qq3703f8/header.jpg"
							alt="kek"
						/>
						<CardContent style={{ backgroundColor: "white", color: "black" }}>
							<Typography gutterBottom variant="h5" component="div">
								Kek Lapis
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Selamat datang ke kedai saya. Di sini pelbagai jenis Kek Lapis
								Sarawak ditawarkan,dari tiga rasa hingga ke masam manis.Terima
								Kasih kerana menyokong bisnes kecil saya.
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Alamat : Lorong B11, RPR Sebiew, 97000 Bintulu
							</Typography>
							<Typography variant="body2" color="text.secondary">
								NOMBOR TELEFON  
								<a href="https://wa.me/01234578" target="blank">
									0156458445
								</a>
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<break/>
				<Grid container>
					<Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item>
								<img
									style={{ width: 128, height: 128 }}
									alt="cadbury"
									src="https://i.postimg.cc/BQwCm84J/kek-lapis-cadbury.jpg"
								/>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Typography
											gutterBottom
											variant="subtitle1"
											component="div"
										>
											Kek Lapis Cadbury
										</Typography>
									</Grid>
									<Grid item>
										<Typography sx={{ cursor: "pointer" }} variant="body2">
											Tambah
										</Typography>
									</Grid>
								</Grid>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										RM25.00
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
					<Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item>
								<img
									style={{ width: 128, height: 128 }}
									alt="redvelvet"
									src="https://i.postimg.cc/HxXph8fR/kek-lapis-red-velvet.jpg"
								/>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Typography
											gutterBottom
											variant="subtitle1"
											component="div"
										>
											Kek Lapis Red Velvet
										</Typography>
									</Grid>
									<Grid item>
										<Typography sx={{ cursor: "pointer" }} variant="body2">
											Tambah
										</Typography>
									</Grid>
								</Grid>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										RM25.00
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
					<Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item>
								<img
									style={{ width: 128, height: 128 }}
									alt="roll"
									src="https://i.postimg.cc/W382Vc1w/kek-lapis-roll.jpg"
								/>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Typography
											gutterBottom
											variant="subtitle1"
											component="div"
										>
											Kek Lapis Roll
										</Typography>
									</Grid>
									<Grid item>
										<Typography sx={{ cursor: "pointer" }} variant="body2">
											Tambah
										</Typography>
									</Grid>
								</Grid>
								<Grid item>
									<Typography variant="subtitle1" component="div">
										RM30.00
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid> */}