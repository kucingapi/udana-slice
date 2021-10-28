import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const Get = (url) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(url)
            .then((result) => {
                resolve(result)
            }, (error) => {
                reject(error)
            })
    })
    return promise
}



const DataTable = (props) => (
	<TableContainer component={Paper}>
		<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
				<TableRow>
					<TableCell align="left">id</TableCell>
					<TableCell align="left">name</TableCell>
					<TableCell align="left">brewery_type</TableCell>
					<TableCell align="left">street</TableCell>
					<TableCell align="left">address_2</TableCell>
					<TableCell align="left">address_3</TableCell>
					<TableCell align="left">city</TableCell>
					<TableCell align="left">state</TableCell>
					<TableCell align="left">county_province</TableCell>
					<TableCell align="left">postal_code</TableCell>
					<TableCell align="left">country</TableCell>
					<TableCell align="left">longitude</TableCell>
					<TableCell align="left">latitude</TableCell>
					<TableCell align="left">phone</TableCell>
					<TableCell align="left">website_url</TableCell>
					<TableCell align="left">updated_at</TableCell>
					<TableCell align="left">created_atid</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props.rows.map((row) => (
					<TableRow
						key={row.id}
					>
						<TableCell align="left">{row.id}</TableCell>
						<TableCell align="left">{row.name}</TableCell>
						<TableCell align="left">{row.brewery_type}</TableCell>
						<TableCell align="left">{row.street}</TableCell>
						<TableCell align="left">{row.address_2}</TableCell>
						<TableCell align="left">{row.address_3}</TableCell>
						<TableCell align="left">{row.city}</TableCell>
						<TableCell align="left">{row.state}</TableCell>
						<TableCell align="left">{row.county_province}</TableCell>
						<TableCell align="left">{row.postal_code}</TableCell>
						<TableCell align="left">{row.country}</TableCell>
						<TableCell align="left">{row.longitude}</TableCell>
						<TableCell align="left">{row.latitude}</TableCell>
						<TableCell align="left">{row.phone}</TableCell>
						<TableCell align="left">{row.website_url}</TableCell>
						<TableCell align="left">{row.updated_at}</TableCell>
						<TableCell align="left">{row.created_atid}</TableCell>


					</TableRow>
				))}
		</TableBody>
		</Table>
	</TableContainer>
)

export const BreweriesData = () => {
	const getData = Get('https://api.openbrewerydb.org/breweries');
	const [data, setData] = useState([]);
	useEffect(() => {
		getData
			.then((result)=>{
				setData(result.data);
				// console.log(data);
			})
			.catch((err)=>{
				console.log(err);
			})
	},[])

	return(
		<DataTable rows={data}/>
	)
}