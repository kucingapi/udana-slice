import { Box, Card, Typography, Grid, CardHeader, CardContent, CardMedia, CardActions, Button } from "@mui/material"

const CardBusiness = (props) => {
	return(
		<Card sx={{boxShadow:2}}>
			<CardHeader
			  title="F&B"
			  sx={{
				  textAlign:'center'
			  }}
			/>
			<CardMedia
				component="img"
				height="200"
				image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
				alt="content"
			/>
			<CardContent>
				<Typography 
					variant="body1" 
					textAlign='center' 
					color="primary"
					sx={{
						fontWeight:'900'
					}}
				>
					Rindu Candu Milk Bar
				</Typography>
			</CardContent>
			<CardActions sx={{
				padding:'0',
				background:'#F8F8F8'
			}}>
				<Button 
					sx={{
						color:'black',
						fontWeight:'900'
					}}
					variant="text" 
					fullWidth 
				>
					Lihat Detail
				</Button>
			</CardActions>
		</Card>
	)	
}

export const GridCardBusinessSection = () => {
	return (
		<>
			<Box mt={25}>
				<Typography 
					sx={{fontWeight:'900'}} 
					textAlign='center' 
					variant="h3" 
					color="initial"
				>
					Siap Memulai Berbisnis?
				</Typography>	
				<Typography 
					textAlign="center" 
					variant="body1" 
					color="secondary.contrastText"
				>
					Tentukan bisnis waralaba pilihan Anda sekarang
				</Typography>	
			</Box>
			<Box mx={5} mt={10} borderBottom='1px solid #eee'/>
			<Grid p={10} container spacing={4}>
				<Grid item md={4} sm={12}>
					<CardBusiness/>
				</Grid>
				<Grid item md={4} sm={12}>
					<CardBusiness/>
				</Grid>
				<Grid item md={4} sm={12}>
					<CardBusiness/>
				</Grid>
				<Grid item md={4} sm={12}>
					<CardBusiness/>
				</Grid>
				<Grid item md={4} sm={12}>
					<CardBusiness/>
				</Grid>
				<Grid item md={4} sm={12}>
					<CardBusiness/>
				</Grid>
			</Grid>
		</>
	)
}