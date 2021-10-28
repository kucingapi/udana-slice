import { AppBar, Toolbar, Link, Button, Stack } from "@mui/material"
import { makeStyles } from "@mui/styles";
import Logo from "../assets/Logo.png";

const useStyles = makeStyles((theme) => ({
	logo:{
		height:'35px'
	},
	boldText:{
		fontWeight:900,
	},
}));

const InvisibleButton = (props) => {
	return(
		<Button sx={{
			color:"white",
			textTransform:'none',
			fontWeight:'900'
		}}>
			{props.children}
		</Button>
	)
}

export const Navbar = () =>{
	const classes = useStyles();
	return (
		<AppBar sx={{
			background: 'transparent',
			boxShadow:'none',
			position:'relative'
		}}>
			<Toolbar>
				<Stack direction="row" spacing={2}>
					<Link href="https://udana.id/">
						<img className={classes.logo} src={Logo} alt="logo"/>
					</Link>
					<Link>
						<InvisibleButton>Wiralaba</InvisibleButton>
					</Link>
					<Link>
						<InvisibleButton>FAQ</InvisibleButton>
					</Link>
					<Link>
						<InvisibleButton>Tentang</InvisibleButton>
					</Link>
				</Stack>
				<Stack sx={{ml:"auto"}} direction="row" spacing={2}>
					<Link>
						<InvisibleButton>Masuk</InvisibleButton>
					</Link>
					<Link>
						<Button 
							variant="contained" 
							sx={{
								textTransform:'none',
								fontWeight:'900'
							}}>
							Mulai Daftar
						</Button>
					</Link>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}