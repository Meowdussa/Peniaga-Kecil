import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function Menucards() {
    return (
			<Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
									<Typography gutterBottom variant="subtitle1" component="div">
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
									<Typography gutterBottom variant="subtitle1" component="div">
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
									<Typography gutterBottom variant="subtitle1" component="div">
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

            
		);
}

export default Menucards
