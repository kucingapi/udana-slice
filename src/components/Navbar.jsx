import { AppBar, Toolbar, Link } from "@mui/material"
import { makeStyles } from "@mui/styles";
import Logo from "../assets/Logo.png";

const useStyles = makeStyles((theme) => ({
	logo:{
		height:'35px'
	}
}));

export const Navbar = () =>{
	const classes = useStyles();
	return (
		<AppBar sx={{
			background: 'transparent',
			boxShadow:'none',
		}}>
			<Toolbar>
				<Link href="https://udana.id/">
					<img className={classes.logo} src={Logo}/>
				</Link>
			</Toolbar>
		</AppBar>
	)
}