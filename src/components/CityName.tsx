import { Typography } from "@mui/material";
import { FC } from "react"

interface CityNameProps {
	name: string;
}

const CityName: FC<CityNameProps> = (props) => {
	const { name } = props;
	
	return (
		<Typography sx={{
			fontFamily: "Quicksand",
			fontWeight: '500',
			letterSpacing: '0.4rem',
			color: '#3C3C3A',
			fontSize: '2rem',
			textTransform: 'uppercase'
		}}>
			{name}
		</Typography>
	)
}

export default CityName;
