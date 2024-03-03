import { ChangeEvent, FC, useEffect, useState } from "react";
import 'animate.css';
import Search from "./Search";
import { Typography } from "@mui/material";

interface Section {
	id: number;
	section: string | JSX.Element;
	duration: number;
}

interface WelcomePageProps {
	searchCity: string;
	handleCityChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSearch: () => void;
}

const WelcomePage: FC<WelcomePageProps> = (props) => {
	const { searchCity, handleCityChange, handleSearch } = props;

	const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);

	const sectionsData: Section[] = [
		{
			id: 1,
			section:
				<Typography sx={{
					fontFamily: "Quicksand",
					fontWeight: '500',
				}}>
					Welcome
				</Typography>,
			duration: 1000
		},
		{
			id: 2,
			section:
				<Typography sx={{
					fontFamily: "Quicksand",
					fontWeight: '500',
				}}>
					Let's get started by setting the weather for your preferred location
				</Typography>,
			duration: 3000
		},
		{
			id: 3,
			section:
				<Search
					searchCity={searchCity}
					handleCityChange={handleCityChange}
					handleSearch={handleSearch}
				/>,
			duration: 6500
		},
	];

	useEffect(() => {
		const timers = sectionsData.map((section, index) => (
			setTimeout(() => setVisibleSectionIndex(index + 1), section.duration)
		));

		return () => {
			timers.forEach(timer => clearTimeout(timer));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const currentSection = sectionsData[visibleSectionIndex - 1];

	return (
		<>
			{currentSection && (
				<div
					key={currentSection.id}
					className="animate__animated animate__fadeIn">
					{currentSection.section}
				</div>
			)}
		</>
	);
};

export default WelcomePage;
