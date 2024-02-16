import { Grid, IconButton } from "@mui/material";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import Search from "../partials/Search";
import CloseIcon from '@mui/icons-material/Close';

interface NavbarProps {
	setIsSearching: Dispatch<SetStateAction<boolean>>;
	isSearching: boolean;
	searchCity: string;
	handleCityChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSearch: () => void;
}

const Navbar: FC<NavbarProps> = (props) => {
	const { setIsSearching, isSearching, searchCity, handleCityChange, handleSearch } = props;
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
				<Grid item xs={5}>
					<Search
						searchCity={searchCity}
						handleCityChange={handleCityChange}
						handleSearch={handleSearch}
					/>
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