import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { Navbar } from "./Navbar"
const useStyles = makeStyles((theme) => ({
	introImage:{
		backgroundColor:"#000000",
		height:"100vh"
	}
}));
export const WelcomeSection = () =>{
	const classes = useStyles();
	return (
		<>
			<Box className={classes.introImage}>
				<Navbar />
			</Box>
		</>
	)
}