import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, FC } from 'react';
import { InputAdornment, TextField } from '@mui/material';

interface SearchProps {
  searchCity: string;
  handleCityChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const Search: FC<SearchProps> = (props) => {
  const { handleSearch, searchCity, handleCityChange } = props;

  return (
    <TextField
      sx={{
        p: '2px 4px',
        width: 400,
        borderRadius: '2rem',
        boxShadow: 'inset 2px 5px 10px #bdbaae',
        background: '#DFDED8',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
      }}
      size='small'
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            <IconButton sx={{ p: '10px' }}
              onClick={handleSearch}
            >
              <SearchIcon sx={{ color: '#B3B1A9' }} />
            </IconButton>
          </InputAdornment>
      }}
      value={searchCity}
      onChange={handleCityChange}
    />
  );
}

export default Search;
