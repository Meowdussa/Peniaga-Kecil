import React from 'react'
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export default function Chenkitchen() {
	return (
		<div>
			<Card sx={{ maxWidth: 1200 }}>
				<CardActionArea style={{ backgroundColor: "white" }}>
					<CardMedia
						component="img"
						height="450"
						image="https://i.postimg.cc/Y2PLvT7C/header.jpg"
						alt="headerchen"
					/>
					<CardContent style={{ backgroundColor: "white", color: "black" }}>
						<Typography gutterBottom variant="h5" component="div">
							Chen's Kitchen
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Selamat datang ke kedai saya. Di sini pelbagai jenis mee Sarawak
							ditawarkan,dari Mi Kolok hingga ke Laksa Sarawak.Terima Kasih
							kerana menyokong bisnes kecil saya.
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Alamat : 10, Kampung Kemunting, 97000 Bintulu
						</Typography>
						<Typography variant="body2" color="text.secondary">
							NOMBOR TELEFON{" "}
							<a href="https://wa.me/01234578" target="blank">
								0148339642
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
							alt="laksa"
							src="https://i.postimg.cc/QN93Sy2P/laksa-sarawak.jpg"
						/>
					</Grid>

					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Laksa Sarawak
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
								RM5.00
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
							alt="kampua"
							src="https://i.postimg.cc/BQ9dpQcL/mi-kampua.jpg"
						/>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Mi Kampua{" "}
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
								RM5.00
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
							alt="kolok"
							src="https://i.postimg.cc/xT8bsnfQ/mi-kolok.jpg"
						/>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Mi Kolok
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
								RM8.00
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			
			</Paper>
			</Grid>
		</div>
	);
}

