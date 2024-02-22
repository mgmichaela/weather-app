import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import Search from "../partials/Search";
import CloseIcon from '@mui/icons-material/Close';
import FmdBadIcon from '@mui/icons-material/FmdBad';

interface NavbarProps {
	setIsSearching: Dispatch<SetStateAction<boolean>>;
	isSearching: boolean;
	searchCity: string;
	handleCityChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSearch: () => void;
	isInputIncorrect: boolean;
}

const Navbar: FC<NavbarProps> = (props) => {
	const { setIsSearching, isSearching, searchCity, handleCityChange, handleSearch, isInputIncorrect } = props;
	return (
		<Grid container sx={{ paddingTop: '1rem', marginBottom: '3rem' }}>
			<Grid item xs={isSearching ? 1 : 6}>
				<IconButton onClick={() => setIsSearching(!isSearching)} sx={{ border: '2px solid #B3B1A9' }}>
					{isSearching ? (
						<CloseIcon sx={{ color: '#B3B1A9' }} />
					) : (
						<AddIcon sx={{ color: '#B3B1A9' }} />
					)}
				</IconButton>
			</Grid>
			{isSearching && (
				<Grid item xs={5}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Search
						searchCity={searchCity}
						handleCityChange={handleCityChange}
						handleSearch={handleSearch}
					/>
					{isInputIncorrect && (
						<Box sx={{
							background: '#E57777',
							borderRadius: '1rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '0.45rem 1.5rem',
							marginTop: '0.25rem'
						}}
						>
							<FmdBadIcon sx={{ color: '#3C3C3A',fontSize: '1.25rem', marginRight: '0.25rem' }} />
							<Typography sx={{
								fontFamily: "Quicksand",
								textTransform: 'uppercase',
								fontWeight: 500,
								color: '#3C3C3A',
								fontSize: '0.85rem'
							}}>Incorrect city name</Typography>
						</Box>
					)}
				</Grid>
			)}
			<Grid item xs={6} sx={{ textAlign: 'right' }}>
				<IconButton onClick={() => console.log('IconButton clicked')} sx={{ border: '2px solid #B3B1A9' }}>
					<MenuIcon sx={{ color: '#B3B1A9' }} />
				</IconButton>
			</Grid>
		</Grid>
	)
}

export default Navbar;