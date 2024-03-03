import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react"

interface DetailsProps {
	feelsLikeTemperature: number;
    windSpeed: number;
    humidity: number;
}

const Details: FC<DetailsProps> = (props) => {
	const { feelsLikeTemperature, windSpeed, humidity } = props;
	
	return (
        <Grid container>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography sx={{ color: '#3C3C3A', fontSize: '1.5rem', fontWeight: '300', textTransform: 'uppercase' }}>
                  Feels like
                </Typography>
                <Typography sx={{ color: '#3C3C3A', fontSize: '2rem', textTransform: 'uppercase' }}>
                  {Math.round(feelsLikeTemperature)}°
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography sx={{ color: '#3C3C3A', fontSize: '1.5rem', fontWeight: '300', textTransform: 'uppercase' }}>
                  Wind
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ color: '#3C3C3A', fontSize: '2rem', textTransform: 'uppercase' }}>
                    {Math.round(windSpeed)}
                  </Typography>
                  <Typography sx={{ color: '#3C3C3A', fontSize: '1rem', textTransform: 'uppercase' }}>
                    m/s
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography sx={{ color: '#3C3C3A', fontSize: '1.5rem', fontWeight: '300', textTransform: 'uppercase' }}>
                  Humidity
                </Typography>
                <Typography sx={{ color: '#3C3C3A', fontSize: '2rem', textTransform: 'uppercase' }}>
                  {humidity}%
                </Typography>
              </Grid>
            </Grid>
	)
}

export default Details;
