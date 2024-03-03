import { useState, useEffect, ChangeEvent, FC } from 'react';
import axios from 'axios';
import { Box, Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import CityName from './components/CityName';
import Line from './components/Line';
import Temperature from './components/Temperature';
import WeatherType from './components/WeatherType';
import Details from './components/Details';
import WelcomePage from './partials/WelcomePage';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: [{
    main: string;
    icon: string;
  }];
  wind: {
    speed: number;
  }
}

const App: FC = () => {
  const [searchCity, setSearchCity] = useState<string>('');
  // implement local storage because city is not being saved here, only once
  const [city, setCity] = useState<string>('Stockholm' || searchCity);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isInputIncorrect, setIsInputIncorrect] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get<WeatherData>(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setIsInputIncorrect(true);

        setTimeout(() => {
          setIsInputIncorrect(false);
        }, 1000);
      }
    };

    fetchWeatherData();

    // fetch weather data every 10 minutes
    const intervalId = setInterval(fetchWeatherData, 600000);
    return () => clearInterval(intervalId);

  }, [city]);

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCity(e.target.value);
  };

  const handleSearch = () => {
    setCity(searchCity);
    setIsInputIncorrect(false);
    setSearchCity('');
    setIsFirstTime(false);
  };


  useEffect(() => {
    const isFirstTimeVisitor = localStorage.getItem('isFirstTimeVisitor');

    if (!isFirstTimeVisitor) {
      setIsFirstTime(true);
      localStorage.setItem('isFirstTimeVisitor', 'true');
    }
  }, []);

  console.log('searchCity', searchCity)

  return (
    <Container sx={{
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      webkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      height: '55rem'
    }}>
      {isFirstTime && (
        <Box sx={{ height: '55rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <WelcomePage
            searchCity={searchCity}
            handleCityChange={handleCityChange}
            handleSearch={handleSearch}
          />
        </Box>
      )}
      {!isFirstTime && weatherData && (
        <Grid container>
          <Grid item xs={12}>
            <Navbar
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              searchCity={searchCity}
              handleCityChange={handleCityChange}
              handleSearch={handleSearch}
              isInputIncorrect={isInputIncorrect}
            />
          </Grid>
          <Grid
            item xs={12}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            <CityName name={weatherData.name} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              height: '2px',
              marginTop: '2rem'
            }}>
            <Line />
          </Grid>
          <Grid
            item xs={12}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            <Temperature temperature={weatherData.main.temp} />
          </Grid>
          <Grid
            item xs={12}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            <WeatherType weatherType={weatherData.weather[0].main} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              height: '2px',
              marginTop: '2rem',
              marginBottom: '4rem'
            }}>
            <Line />
          </Grid>
          <Grid item xs={12}>
            <Details
              feelsLikeTemperature={weatherData.main.feels_like}
              windSpeed={weatherData.wind.speed}
              humidity={weatherData.main.humidity}
            />
          </Grid>
        </Grid >
      )}
    </Container>
  );
};

export default App;
