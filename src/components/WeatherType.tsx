import { Typography } from "@mui/material";
import { FC } from "react"

interface WeatherTypeProps {
	weatherType: string;
}

const WeatherType: FC<WeatherTypeProps> = (props) => {
	const { weatherType } = props;
	
	return (
        <Typography sx={{
            fontFamily: "Quicksand",
            fontWeight: '500',
            letterSpacing: '0.4rem',
            color: '#535451',
            fontSize: '2rem',
            textTransform: 'uppercase'
          }}>
            {weatherType}
          </Typography>
	)
}

export default WeatherType;
