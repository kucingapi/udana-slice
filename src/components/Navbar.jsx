import { AppBar, Toolbar, Link, Button, Stack } from "@mui/material"
import { makeStyles, styled } from "@mui/styles";
import Logo from "../assets/Logo.png";

const useStyles = makeStyles((theme) => ({
	logo:{
		height:'35px'
	},
	boldText:{
		fontWeight:900,
	},
}));
export const Navbar = () =>{
	const classes = useStyles();
	return (
		<AppBar sx={{
			background: 'transparent',
			boxShadow:'none',
		}}>
			<Toolbar>

				<Stack direction="row" spacing={2}>
					<Link href="https://udana.id/">
						<img className={classes.logo} src={Logo} alt="logo"/>
					</Link>
					<Link>
						<Button sx={{color:"white",textTransform:'none',fontWeight:'900'}}>Wiralaba</Button>
					</Link>
					<Link>
						<Button sx={{color:"white",textTransform:'none',fontWeight:'900'}}>FAQ</Button>
					</Link>
					<Link>
						<Button sx={{color:"white",textTransform:'none',fontWeight:'900'}}>Tentang</Button>
					</Link>
				</Stack>
				<Stack sx={{ml:"auto"}} direction="row" spacing={2}>
					<Link>
						<Button sx={{color:"white",textTransform:'none',fontWeight:'900'}}>Masuk</Button>
					</Link>
					<Link>
						<Button variant="contained" sx={{textTransform:'none',fontWeight:'900'}}>Mulai Daftar</Button>
					</Link>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}