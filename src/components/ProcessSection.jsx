import { Box, Grid, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Picture from "../assets/pilih_umkm.png";


const useStyles = makeStyles((theme) => ({
	image:{
		maxWidth:'100%'
	}
}));

export const ProcessSection = () =>{
	const classes = useStyles();
	return(
		<Box mt={15}>
			<Grid p={3} container sx={{maxWidth:"100%"}}>
				<Grid item md={5}>
					<Typography 
						variant="h3" 
						color="initial"
						sx={{fontWeight:'900'}}
					>
						Menjadi Investor UMKM itu gampang
					</Typography>
				</Grid>
				<Grid item md={4} px={5}>
					<Typography 
						variant="h6" 
						color="secondary.contrastText"
					>
						Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana saja.
					</Typography>
				</Grid>
			</Grid>
			<Grid p={3} spacing={10}container>
				<Grid item md={4}>
					<Stack spacing={2}>
						<Box>
							<img src={Picture} className={classes.image} alt="" />
						</Box>
						<Typography
							sx={{fontWeight:'900'}}
							variant="h5"
							color="initial"
						>
							Pilih UMKM
						</Typography>
						<Typography
							variant="h6"
							color="secondary.contrastText"
						>
							Temukan usaha yang anda minati pada galeri.
						</Typography>
					</Stack>
				</Grid>
				<Grid item md={4}>
					<Stack spacing={2}>
						<Box>
							<img src={Picture} className={classes.image} alt="" />
						</Box>
						<Typography
							sx={{fontWeight:'900'}}
							variant="h5"
							color="initial"
						>
							Pilih UMKM
						</Typography>
						<Typography
							variant="h6"
							color="secondary.contrastText"
						>
							Temukan usaha yang anda minati pada galeri.
						</Typography>
					</Stack>
				</Grid>
				<Grid item md={4}>
					<Stack spacing={2}>
						<Box>
							<img src={Picture} className={classes.image} alt="" />
						</Box>
						<Typography
							sx={{fontWeight:'900'}}
							variant="h5"
							color="initial"
						>
							Pilih UMKM
						</Typography>
						<Typography
							variant="h6"
							color="secondary.contrastText"
						>
							Temukan usaha yang anda minati pada galeri.
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
}