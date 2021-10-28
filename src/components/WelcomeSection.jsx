import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Navbar } from "./Navbar";
import background from "../assets/background_main.jpg";
import {ReactComponent as Border} from '../assets/background_border.svg';
import { DoubleArrow } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
	introImage:{
		backgroundImage:`url(${background})`,
		height:"97vh"
	},
	border:{
		position:'absolute',
		bottom:0,
		overflow:'hidden'
	}
}));

export const WelcomeSection = () =>{
	const classes = useStyles();
	return (
		<>
			<Box className={classes.introImage}>
				<Navbar />
				<Grid p={10}container>
					<Grid item md={5} sm={12}>
						<Stack spacing={3}>
							<Typography 
								sx={{fontWeight:'900'}} 
								variant="h3" 
								color="primary"
							>
								Jadilah Investor UMKM & Waralaba
							</Typography>
							<Typography 
								variant="body1" 
								color="primary.contrastText"
							>
								Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi investor untuk kemajuan perekonomian bangsa tanpa perlu pusing dengan operasional sehari-hari
							</Typography>
						</Stack>
						<Link>
							<Button 
								p={4}
								variant="contained" 
								endIcon={<DoubleArrow/>} 
								sx={{
									textTransform:'none',
									fontWeight:'900'
								}}
							>
								Investasi Sekarang
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Box>
			<Border className={classes.border}/>
		</>
	)
}