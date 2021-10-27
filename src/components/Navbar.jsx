import { AppBar, Toolbar } from "@mui/material"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
}));

export const Navbar = () =>{
	const classes = useStyles();
	return (
		<AppBar>
			<Toolbar>
			</Toolbar>
		</AppBar>
	)
}