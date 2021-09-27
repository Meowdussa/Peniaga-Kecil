import React from 'react'
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Supkawah() {
    return (
			<div>
				<Card sx={{ maxWidth: 1200 }}>
					<CardActionArea style={{ backgroundColor: "white" }}>
						<CardMedia
							component="img"
							height="450"
							image="https://i.postimg.cc/ZKTQmtd0/header.jpg"
							alt="makanansrwk"
						/>
						<CardContent style={{ backgroundColor: "white", color: "black" }}>
							<Typography gutterBottom variant="h5" component="div">
								Sup Kawah
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Selamat datang ke kedai saya. Di sini pelbagai jenis makanan
								Melayu Sarawak ditawarkan,dari gulai ayam hingga ke ikan masak
								lemak. Silalah menjamu selera di kedai saya.
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Alamat : Lorong B11, RPR Sebiew, 97000 Bintulu
							</Typography>
							<Typography variant="body2" color="text.secondary">
								NOMBOR TELEFON{" "}
								<a href="https://wa.me/01234578" target="blank">
									0102396193
								</a>
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Grid container>
					<Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item>
								<img
									style={{ width: 128, height: 128 }}
									alt="gulaiayam"
									src="https://i.postimg.cc/yN9gnGny/gulai-ayam.jpg"
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
											Gulai Ayam
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
									alt="sup"
									src="https://i.postimg.cc/G2TQPR53/sup-ayam.jpg"
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
											Sup Ayam
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
									alt="sup"
									src="https://i.postimg.cc/2StRC4g1/sup-tulang.jpg"
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
											Sup Tulang
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
										RM10.00
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</div>
		);
}
