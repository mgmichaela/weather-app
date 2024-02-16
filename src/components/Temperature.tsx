import { Typography } from "@mui/material";
import { FC } from "react"

interface TemperatureProps {
	temperature: number;
}

const Temperature: FC<TemperatureProps> = (props) => {
	const { temperature } = props;
	
	return (
        <Typography sx={{
            fontFamily: 'Roboto',
            fontWeight: 100,
            color: '#3C3C3A',
            fontSize: '15rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.5rem',
          }}>
            {Math.round(temperature)}°
          </Typography>
	)
}

export default Temperature;
