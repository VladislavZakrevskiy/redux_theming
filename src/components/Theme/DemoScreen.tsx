import { Paper, Theme, ThemeProvider, createTheme } from '@mui/material'
import NavBar from './DemoScreenComp/Navbar'
import Routing from './DemoScreenComp/Routing'
import { useAppSelector } from '../../store/hooks';

const DemoScreen = () => {
	const {newTheme} = useAppSelector(state => state.theme)
	console.log(newTheme)
	const theme = createTheme(newTheme)
	

	if (!newTheme) {
		return null
	}

	return (
		<ThemeProvider theme={theme}>
			<Paper
				sx={{
					boxShadow: '-1px -1px 10px 0px white',
					height: '80vh',
					width: '60vw',
					overflowY: 'scroll',
				}}
			>
				<NavBar />
				<Routing />
			</Paper>
		</ThemeProvider>
	)
}

export default DemoScreen
