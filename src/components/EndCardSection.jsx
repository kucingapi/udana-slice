import { LocalPhone, Mail, Room } from "@mui/icons-material"
import { Grid, Paper, Stack, Typography, Box } from "@mui/material"

export const EndCardSection = ()=>{
	return(

			<Paper sx={{p:5, mt:10, mx:10, backgroundColor:'primary.main', borderRadius:5}}>
				<Grid container spacing={10}>
					<Grid md={6} item>
						<Stack spacing={3}>
							<Typography sx={{fontWeight:900}} variant="h3" color="primary.contrastText">Kami siap membantu Anda</Typography>
							<Typography variant="body1" color="primary.contrastText">Apabila Anda ingin mengetahui lebih lanjut mengenai Udana. Silahkan menghubungi kami</Typography>
						</Stack>
					</Grid>
					<Grid md={6} item>
						<Stack spacing={3}>
							<Stack direction='row' spacing={3}>
								<Room fontSize='small' sx={{mt:0.3,color:"primary.contrastText"}}/>
								<Box>
									<Typography variant="body1" color="primary.contrastText">PT Dana Rintis Indonesia</Typography>
									<Typography variant="body1" color="primary.contrastText">Gedung City Lofts Sudirman, 2016</Typography>
									<Typography variant="body1" color="primary.contrastText">Jl. K.H Mas Mansyur 121, Jakarta Pusat</Typography>
									<Typography variant="body1" color="primary.contrastText">DKI Jakarta, 10220</Typography>
								</Box>
							</Stack>
							<Stack direction='row' alignItems='center' spacing={3}>
								<Mail fontSize='small' sx={{color:"primary.contrastText"}}/>
								<Typography variant="body1" color="primary.contrastText">ask@udana.id</Typography>
							</Stack>
							<Stack direction='row' alignItems='center' spacing={3}>
								<LocalPhone fontSize='small' sx={{color:"primary.contrastText"}}/>
								<Typography variant="body1" color="primary.contrastText">081919191115</Typography>
							</Stack>
						</Stack>
						
					</Grid>
				</Grid>	
			</Paper>
	)
}