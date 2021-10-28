import { Box, Card, Typography, Grid } from "@mui/material"

const CardBusiness = (props) => {
	return(
		<Card>

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
					variant="h4" 
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
			<Box mx={10} mt={10} borderBottom='1px solid #eee'/>
			<Grid container spacing={4}>
			 	 
			</Grid>
		</>
	)
}